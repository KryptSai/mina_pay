import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBlockOrThrowArgs } from "./args/FindFirstBlockOrThrowArgs";
import { Block } from "../../../models/Block";
export declare class FindFirstBlockOrThrowResolver {
    findFirstBlockOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBlockOrThrowArgs): Promise<Block | null>;
}
//# sourceMappingURL=FindFirstBlockOrThrowResolver.d.ts.map