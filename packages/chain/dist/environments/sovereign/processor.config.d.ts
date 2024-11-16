import { Processor } from "@proto-kit/processor";
import { Startable } from "@proto-kit/deployment";
import { Arguments } from "../../start";
export declare const processor: Processor<{
    GraphqlServer: typeof import("@proto-kit/api").GraphqlServer;
    GraphqlSequencerModule: import("@proto-kit/common").TypedClass<import("@proto-kit/api").GraphqlSequencerModule<{
        ResolverFactory: import("@proto-kit/common").TypedClass<import("@proto-kit/processor").ResolverFactoryGraphqlModule<import("@proto-kit/processor/dist/handlers/BasePrismaClient").BasePrismaClient>>;
    }>>;
    HandlersExecutor: import("@proto-kit/common").TypedClass<import("@proto-kit/processor").HandlersExecutor<import("@prisma/client-processor").PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>, import("@proto-kit/processor").HandlersRecord<import("@prisma/client-processor").PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>>>>;
    BlockFetching: typeof import("@proto-kit/processor").BlockFetching;
    Trigger: typeof import("@proto-kit/processor").TimedProcessorTrigger;
    Database: import("@proto-kit/common").TypedClass<import("@proto-kit/processor").Database<import("@prisma/client-processor").PrismaClient<import("@prisma/client-processor").Prisma.PrismaClientOptions, never, import("@prisma/client-processor/runtime/library").DefaultArgs>>>;
}>;
declare const _default: (args: Arguments) => Promise<Startable>;
export default _default;
//# sourceMappingURL=processor.config.d.ts.map