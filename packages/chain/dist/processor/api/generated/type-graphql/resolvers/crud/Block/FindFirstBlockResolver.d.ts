import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBlockArgs } from "./args/FindFirstBlockArgs";
import { Block } from "../../../models/Block";
export declare class FindFirstBlockResolver {
    findFirstBlock(ctx: any, info: GraphQLResolveInfo, args: FindFirstBlockArgs): Promise<Block | null>;
}
//# sourceMappingURL=FindFirstBlockResolver.d.ts.map