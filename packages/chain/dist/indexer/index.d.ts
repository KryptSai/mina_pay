import { GeneratedResolverFactoryGraphqlModule } from "@proto-kit/indexer";
import { ModulesConfig } from "@proto-kit/common";
import { GraphqlSequencerModule, GraphqlServer } from "@proto-kit/api";
import { PrismaRedisDatabase } from "@proto-kit/persistance";
import { BullQueue } from "@proto-kit/deployment";
import { LocalTaskWorkerModule } from "@proto-kit/sequencer";
import { IndexBlockTask } from "@proto-kit/indexer";
export declare const modules: {
    Database: typeof PrismaRedisDatabase;
    TaskQueue: typeof BullQueue;
    TaskWorker: import("@proto-kit/common").TypedClass<LocalTaskWorkerModule<{
        IndexBlockTask: typeof IndexBlockTask;
    }>>;
    GraphqlServer: typeof GraphqlServer;
    Graphql: import("@proto-kit/common").TypedClass<GraphqlSequencerModule<{
        GeneratedResolverFactory: typeof GeneratedResolverFactoryGraphqlModule;
    }>>;
};
export declare const config: ModulesConfig<typeof modules>;
declare const _default: {
    modules: {
        Database: typeof PrismaRedisDatabase;
        TaskQueue: typeof BullQueue;
        TaskWorker: import("@proto-kit/common").TypedClass<LocalTaskWorkerModule<{
            IndexBlockTask: typeof IndexBlockTask;
        }>>;
        GraphqlServer: typeof GraphqlServer;
        Graphql: import("@proto-kit/common").TypedClass<GraphqlSequencerModule<{
            GeneratedResolverFactory: typeof GeneratedResolverFactoryGraphqlModule;
        }>>;
    };
    config: ModulesConfig<{
        Database: typeof PrismaRedisDatabase;
        TaskQueue: typeof BullQueue;
        TaskWorker: import("@proto-kit/common").TypedClass<LocalTaskWorkerModule<{
            IndexBlockTask: typeof IndexBlockTask;
        }>>;
        GraphqlServer: typeof GraphqlServer;
        Graphql: import("@proto-kit/common").TypedClass<GraphqlSequencerModule<{
            GeneratedResolverFactory: typeof GeneratedResolverFactoryGraphqlModule;
        }>>;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map