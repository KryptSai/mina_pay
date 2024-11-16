import { TestingAppChain } from "@proto-kit/sdk";
export declare const appChain: TestingAppChain<{
    Balances: typeof import("@proto-kit/library").Balances;
} & {
    Balances: typeof import("@proto-kit/library").Balances & typeof import("../../runtime/modules/balances").Balances;
}, import("@proto-kit/protocol").MandatoryProtocolModulesRecord & {
    TransactionFee: typeof import("@proto-kit/library").TransactionFeeHook;
}, {
    Database: typeof import("@proto-kit/sequencer").InMemoryDatabase;
    Mempool: typeof import("@proto-kit/sequencer").PrivateMempool;
    LocalTaskWorkerModule: import("@proto-kit/common").TypedClass<import("@proto-kit/sequencer").LocalTaskWorkerModule<{
        StateTransitionTask: typeof import("@proto-kit/sequencer").StateTransitionTask;
        StateTransitionReductionTask: typeof import("@proto-kit/sequencer").StateTransitionReductionTask;
        RuntimeProvingTask: typeof import("@proto-kit/sequencer").RuntimeProvingTask;
        BlockProvingTask: typeof import("@proto-kit/sequencer").BlockProvingTask;
        BlockReductionTask: typeof import("@proto-kit/sequencer").BlockReductionTask;
        BlockBuildingTask: typeof import("@proto-kit/sequencer").NewBlockTask;
        CircuitCompilerTask: any;
        WorkerRegistrationTask: any;
    }>>;
    BaseLayer: typeof import("@proto-kit/sequencer").NoopBaseLayer;
    BatchProducerModule: typeof import("@proto-kit/sequencer").BatchProducerModule;
    BlockProducerModule: typeof import("@proto-kit/sequencer").BlockProducerModule;
    BlockTrigger: typeof import("@proto-kit/sequencer").ManualBlockTrigger;
    TaskQueue: typeof import("@proto-kit/sequencer").LocalTaskQueue;
}, {
    Signer: typeof import("@proto-kit/sdk").InMemorySigner;
    TransactionSender: typeof import("@proto-kit/sdk").InMemoryTransactionSender;
    QueryTransportModule: typeof import("@proto-kit/sdk").StateServiceQueryModule;
    NetworkStateTransportModule: typeof import("@proto-kit/sdk").BlockStorageNetworkStateModule;
}>;
//# sourceMappingURL=app-chain.d.ts.map