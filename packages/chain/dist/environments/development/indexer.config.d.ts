import { Indexer } from "@proto-kit/indexer";
import { Startable } from "@proto-kit/deployment";
import { Arguments } from "../../start";
import { DatabasePruneModule } from "@proto-kit/sequencer";
export declare const indexer: Indexer<{
    DatabasePruneModule: typeof DatabasePruneModule;
    Database: typeof import("@proto-kit/persistance").PrismaRedisDatabase;
    TaskQueue: typeof import("@proto-kit/deployment").BullQueue;
    TaskWorker: import("@proto-kit/sequencer").TypedClass<import("@proto-kit/sequencer").LocalTaskWorkerModule<{
        IndexBlockTask: typeof import("@proto-kit/indexer").IndexBlockTask;
    }>>;
    GraphqlServer: typeof import("@proto-kit/api").GraphqlServer;
    Graphql: import("@proto-kit/sequencer").TypedClass<import("@proto-kit/api").GraphqlSequencerModule<{
        GeneratedResolverFactory: typeof import("@proto-kit/indexer").GeneratedResolverFactoryGraphqlModule;
    }>>;
}>;
declare const _default: (args: Arguments) => Promise<Startable>;
export default _default;
//# sourceMappingURL=indexer.config.d.ts.map