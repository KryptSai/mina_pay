import { Database, TimedProcessorTrigger, BlockFetching, HandlersExecutor, ResolverFactoryGraphqlModule } from "@proto-kit/processor";
import { ModulesConfig } from "@proto-kit/common";
import { PrismaClient } from "@prisma/client-processor";
import { GraphqlSequencerModule, GraphqlServer } from "@proto-kit/api";
export declare const databaseModule: import("@proto-kit/common").TypedClass<Database<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>>>;
export declare const modules: {
    GraphqlServer: typeof GraphqlServer;
    GraphqlSequencerModule: import("@proto-kit/common").TypedClass<GraphqlSequencerModule<{
        ResolverFactory: import("@proto-kit/common").TypedClass<ResolverFactoryGraphqlModule<import("@proto-kit/processor/dist/handlers/BasePrismaClient").BasePrismaClient>>;
    }>>;
    HandlersExecutor: import("@proto-kit/common").TypedClass<HandlersExecutor<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>, import("@proto-kit/processor").HandlersRecord<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>>>>;
    BlockFetching: typeof BlockFetching;
    Trigger: typeof TimedProcessorTrigger;
};
export declare const config: ModulesConfig<typeof modules>;
declare const _default: {
    modules: {
        GraphqlServer: typeof GraphqlServer;
        GraphqlSequencerModule: import("@proto-kit/common").TypedClass<GraphqlSequencerModule<{
            ResolverFactory: import("@proto-kit/common").TypedClass<ResolverFactoryGraphqlModule<import("@proto-kit/processor/dist/handlers/BasePrismaClient").BasePrismaClient>>;
        }>>;
        HandlersExecutor: import("@proto-kit/common").TypedClass<HandlersExecutor<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>, import("@proto-kit/processor").HandlersRecord<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>>>>;
        BlockFetching: typeof BlockFetching;
        Trigger: typeof TimedProcessorTrigger;
    };
    config: ModulesConfig<{
        GraphqlServer: typeof GraphqlServer;
        GraphqlSequencerModule: import("@proto-kit/common").TypedClass<GraphqlSequencerModule<{
            ResolverFactory: import("@proto-kit/common").TypedClass<ResolverFactoryGraphqlModule<import("@proto-kit/processor/dist/handlers/BasePrismaClient").BasePrismaClient>>;
        }>>;
        HandlersExecutor: import("@proto-kit/common").TypedClass<HandlersExecutor<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>, import("@proto-kit/processor").HandlersRecord<PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>>>>;
        BlockFetching: typeof BlockFetching;
        Trigger: typeof TimedProcessorTrigger;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map