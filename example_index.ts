import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import {
  LeveragedPool__factory,
  PoolCommitter__factory,
  ERC20__factory,
  PoolCommitter,
  ERC20,
} from './types'

const commitTypes = {
  ShortMint: 0,
  ShortBurn: 1,
  LongMint: 2,
  LongBurn: 3,
  LongBurnShortMint: 4,
  ShortBurnLongMint: 5
}

const isBurn = (commitType: number) => [1, 3, 4, 5].includes(commitType)

const accounts = [{
  privateKey: 'private_key',
  baseAmount: new BigNumber('1500'),
  amountVariance: 0.5,
  getCommitType: (random: number) => {
    if(random < 0.8) {
      return commitTypes.ShortMint
    } else {
      return commitTypes.ShortBurn
    }
  }
}];

export const MAX_SOL_UINT = ethers.BigNumber.from('340282366920938463463374607431768211455');

// how often to perform commits
const interval = 1000 * 60 * 3 // 3 minutes

// use the following endpoint/query to get pools
// https://thegraph.com/hosted-service/subgraph/scaredibis/tracer-pools-v2-arbitrum-rinkeby?selected=playground
//
// {
//   leveragedPools {
//     id
//     name
//     committer
//   }
// }

const poolAddress = 'pool_address';
const rpcNodeUrl = 'https://rinkeby.arbitrum.io/rpc'

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

async function main() {

  const committerInstances: Record<string, PoolCommitter> = {}
  const wallets: Record<string, ethers.Wallet> = {}
  const tokenInstances: Record<string, ERC20> = {}

  const getTokenForCommitType = (commitType: number) => {
    if([commitTypes.LongBurn, commitTypes.LongBurnShortMint].includes(commitType)) {
      return 'longTokens'
    }
    return 'shortTokens'
  }

  const provider = ethers.getDefaultProvider(rpcNodeUrl)
  const poolInstance = LeveragedPool__factory.connect(poolAddress, provider);
  const [
    longTokenAddress,
    shortTokenAddress
  ] = await Promise.all([
    poolInstance.tokens(0),
    poolInstance.tokens(1),
  ])

  tokenInstances.long = ERC20__factory.connect(longTokenAddress, provider);
  tokenInstances.short = ERC20__factory.connect(shortTokenAddress, provider);

  // connect each account to a pool committer instance and
  // ensure all addresses have approved the pool committer to spend collateral
  for (const { privateKey } of accounts) {
    const signer = new ethers.Wallet(privateKey, provider)

    const poolInstance = LeveragedPool__factory.connect(poolAddress, signer)
    const poolCommitterAddress = await poolInstance.poolCommitter();
    const poolCommiterInstance = PoolCommitter__factory.connect(poolCommitterAddress, signer);

    wallets[privateKey] = signer;
    committerInstances[signer.address] = poolCommiterInstance;

    const quoteToken = await poolInstance.settlementToken();

    const quoteTokenInstance = ERC20__factory.connect(quoteToken, signer);

    const allowance = await quoteTokenInstance.allowance(signer.address, poolAddress);
    const balance = await quoteTokenInstance.balanceOf(signer.address);

    console.log(`${signer.address} has a balance of ${ethers.utils.formatUnits(balance, 18)} and allowance of ${ethers.utils.formatUnits(allowance, 18)}`)

    if(allowance.eq(0)) {
      await quoteTokenInstance.approve(poolAddress, MAX_SOL_UINT);
    }
  }

  const performCommits = async () => {
      // for each account
      for (const index in accounts) {
        try {
          const account = accounts[index]
          const wallet = wallets[account.privateKey];
          const committer = committerInstances[wallets[account.privateKey].address];
          const commitType = account.getCommitType(Math.random())

          let amount = ethers.BigNumber.from(0)
          if(isBurn(commitType)) {
            // get token price
            // burn 30% of position
            const aggregateBalance = await committer.getAggregateBalance(wallet.address)

            const relevantAggregateBalance = aggregateBalance[getTokenForCommitType(commitType)]

            if(relevantAggregateBalance.eq(0)) {
              console.log(`
                ${new Date().toLocaleString()}
                ${wallets[account.privateKey].address} (account ${index}) rolled a burn commit but has no balance
                commit type: ${commitType}
              `)
              continue;
            }

              amount = relevantAggregateBalance.div(3);
          } else {

            const multiplier = 1 + Number(getRandomArbitrary(-account.amountVariance, account.amountVariance).toFixed(18))
            amount = ethers.BigNumber.from(ethers.utils.parseEther(account.baseAmount.times(multiplier).toString()))
          }


          console.log(`
            ${new Date().toLocaleString()}
            committing from ${wallets[account.privateKey].address} (account ${index})
            commit type: ${commitType}
            amount: ${amount.toString()}
          `)

          const result = await committer.commit(commitType, amount, isBurn(commitType), false, {
            gasLimit: 1000000
          })

          console.log(`SUCCESS: ${result.hash}`)
        } catch (error: any) {
          console.log(`ERROR: ${error.message}`)
        }
        console.log('----------------------')
      }
      console.log('*********************')
  }

  await performCommits();

  setInterval(performCommits, interval)
}

main()