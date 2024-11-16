import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBlockArgs } from "./args/DeleteOneBlockArgs";
import { Block } from "../../../models/Block";
export declare class DeleteOneBlockResolver {
    deleteOneBlock(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBlockArgs): Promise<Block | null>;
}
//# sourceMappingURL=DeleteOneBlockResolver.d.ts.map