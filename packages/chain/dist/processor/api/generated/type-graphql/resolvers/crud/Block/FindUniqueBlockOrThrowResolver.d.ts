import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBlockOrThrowArgs } from "./args/FindUniqueBlockOrThrowArgs";
import { Block } from "../../../models/Block";
export declare class FindUniqueBlockOrThrowResolver {
    getBlock(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBlockOrThrowArgs): Promise<Block | null>;
}
//# sourceMappingURL=FindUniqueBlockOrThrowResolver.d.ts.map