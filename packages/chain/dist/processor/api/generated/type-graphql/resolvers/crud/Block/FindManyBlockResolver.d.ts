import type { GraphQLResolveInfo } from "graphql";
import { FindManyBlockArgs } from "./args/FindManyBlockArgs";
import { Block } from "../../../models/Block";
export declare class FindManyBlockResolver {
    blocks(ctx: any, info: GraphQLResolveInfo, args: FindManyBlockArgs): Promise<Block[]>;
}
//# sourceMappingURL=FindManyBlockResolver.d.ts.map