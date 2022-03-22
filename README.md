# Perpetual Pools v2 Activity Simulator

This repo makes it convenient to simulate user activity on v2 testnet pools

`./types` will need to be updated if any interfaces change in the main contracts repo

## Usage

1. claim some testnet `settlementToken` from https://discord.com/channels/808906099172442122/941325787578134569
2. make a copy of `example_index.ts` and name it `index.ts` (will be ignored by git)
    - fill out the accounts array with private key(s) of your choice
    - choose a target pool address
4. install dependencies by running `yarn` from project root
5. start it by running `ts-node index` (vscode debugger will automatically work if run from a Javascript Debug Terminal)