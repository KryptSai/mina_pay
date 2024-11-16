import { VanillaGraphqlModules, GraphqlSequencerModule, GraphqlServer, } from "@proto-kit/api";
import { PrivateMempool, TimedBlockTrigger, BlockProducerModule, } from "@proto-kit/sequencer";
import { IndexerNotifier } from "@proto-kit/indexer";
export const apiSequencerModules = {
    GraphqlServer,
    Graphql: GraphqlSequencerModule.from({
        modules: VanillaGraphqlModules.with({}),
    }),
};
export const apiSequencerModulesConfig = {
    Graphql: VanillaGraphqlModules.defaultConfig(),
    GraphqlServer: {
        port: Number(process.env.PROTOKIT_GRAPHQL_PORT),
        host: process.env.PROTOKIT_GRAPHQL_HOST,
        graphiql: Boolean(process.env.PROTOKIT_GRAPHIQL_ENABLED),
    },
};
export const baseSequencerModules = {
    ...apiSequencerModules,
    Mempool: PrivateMempool,
    BlockProducerModule: BlockProducerModule,
    BlockTrigger: TimedBlockTrigger,
};
export const baseSequencerModulesConfig = {
    ...apiSequencerModulesConfig,
    Mempool: {},
    BlockProducerModule: {},
    BlockTrigger: {
        blockInterval: Number(process.env.PROTOKIT_BLOCK_INTERVAL),
        produceEmptyBlocks: true,
    },
};
export const indexerSequencerModules = {
    IndexerNotifier: IndexerNotifier,
};
export const indexerSequencerModulesConfig = {
    IndexerNotifier: {},
};
