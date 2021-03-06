/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IAutoClaimInterface extends ethers.utils.Interface {
  functions: {
    "checkClaim(tuple,uint256)": FunctionFragment;
    "checkUserClaim(address,address)": FunctionFragment;
    "makePaidClaimRequest(address)": FunctionFragment;
    "multiPaidClaimMultiplePoolCommitters(address[],address[])": FunctionFragment;
    "multiPaidClaimSinglePoolCommitter(address[],address)": FunctionFragment;
    "paidClaim(address,address)": FunctionFragment;
    "withdrawClaimRequest(address)": FunctionFragment;
    "withdrawUserClaimRequest(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkClaim",
    values: [
      { updateIntervalId: BigNumberish; reward: BigNumberish },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkUserClaim",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "makePaidClaimRequest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "multiPaidClaimMultiplePoolCommitters",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiPaidClaimSinglePoolCommitter",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "paidClaim",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawClaimRequest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUserClaimRequest",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "checkClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkUserClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makePaidClaimRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiPaidClaimMultiplePoolCommitters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiPaidClaimSinglePoolCommitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paidClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawClaimRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUserClaimRequest",
    data: BytesLike
  ): Result;

  events: {
    "PaidClaimRequest(address,address,uint256,uint256)": EventFragment;
    "PaidClaimRequestUpdate(address,address,uint256)": EventFragment;
    "PaidRequestExecution(address,address,uint256)": EventFragment;
    "RequestWithdrawn(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PaidClaimRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaidClaimRequestUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaidRequestExecution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawn"): EventFragment;
}

export class IAutoClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IAutoClaimInterface;

  functions: {
    checkClaim(
      request: { updateIntervalId: BigNumberish; reward: BigNumberish },
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    checkUserClaim(
      user: string,
      poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    makePaidClaimRequest(
      user: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiPaidClaimMultiplePoolCommitters(
      users: string[],
      poolCommitterAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiPaidClaimSinglePoolCommitter(
      users: string[],
      poolCommitterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paidClaim(
      user: string,
      poolCommitterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawClaimRequest(
      poolCommitter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawUserClaimRequest(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  checkClaim(
    request: { updateIntervalId: BigNumberish; reward: BigNumberish },
    currentUpdateIntervalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  checkUserClaim(
    user: string,
    poolCommitter: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  makePaidClaimRequest(
    user: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiPaidClaimMultiplePoolCommitters(
    users: string[],
    poolCommitterAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiPaidClaimSinglePoolCommitter(
    users: string[],
    poolCommitterAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paidClaim(
    user: string,
    poolCommitterAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawClaimRequest(
    poolCommitter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawUserClaimRequest(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkClaim(
      request: { updateIntervalId: BigNumberish; reward: BigNumberish },
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checkUserClaim(
      user: string,
      poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    makePaidClaimRequest(
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    multiPaidClaimMultiplePoolCommitters(
      users: string[],
      poolCommitterAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    multiPaidClaimSinglePoolCommitter(
      users: string[],
      poolCommitterAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    paidClaim(
      user: string,
      poolCommitterAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawClaimRequest(
      poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawUserClaimRequest(
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PaidClaimRequest(
      user?: string | null,
      poolCommitter?: string | null,
      updateIntervalId?: BigNumberish | null,
      reward?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        user: string;
        poolCommitter: string;
        updateIntervalId: BigNumber;
        reward: BigNumber;
      }
    >;

    PaidClaimRequestUpdate(
      user?: string | null,
      poolCommitter?: string | null,
      newReward?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; poolCommitter: string; newReward: BigNumber }
    >;

    PaidRequestExecution(
      user?: string | null,
      poolCommitter?: string | null,
      reward?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; poolCommitter: string; reward: BigNumber }
    >;

    RequestWithdrawn(
      user?: string | null,
      poolCommitter?: string | null
    ): TypedEventFilter<
      [string, string],
      { user: string; poolCommitter: string }
    >;
  };

  estimateGas: {
    checkClaim(
      request: { updateIntervalId: BigNumberish; reward: BigNumberish },
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkUserClaim(
      user: string,
      poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makePaidClaimRequest(
      user: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiPaidClaimMultiplePoolCommitters(
      users: string[],
      poolCommitterAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiPaidClaimSinglePoolCommitter(
      users: string[],
      poolCommitterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paidClaim(
      user: string,
      poolCommitterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawClaimRequest(
      poolCommitter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawUserClaimRequest(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkClaim(
      request: { updateIntervalId: BigNumberish; reward: BigNumberish },
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkUserClaim(
      user: string,
      poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makePaidClaimRequest(
      user: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiPaidClaimMultiplePoolCommitters(
      users: string[],
      poolCommitterAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiPaidClaimSinglePoolCommitter(
      users: string[],
      poolCommitterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paidClaim(
      user: string,
      poolCommitterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawClaimRequest(
      poolCommitter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawUserClaimRequest(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
