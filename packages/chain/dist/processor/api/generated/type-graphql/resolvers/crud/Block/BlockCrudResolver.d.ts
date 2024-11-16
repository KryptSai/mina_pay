import type { GraphQLResolveInfo } from "graphql";
import { AggregateBlockArgs } from "./args/AggregateBlockArgs";
import { CreateManyAndReturnBlockArgs } from "./args/CreateManyAndReturnBlockArgs";
import { CreateManyBlockArgs } from "./args/CreateManyBlockArgs";
import { CreateOneBlockArgs } from "./args/CreateOneBlockArgs";
import { DeleteManyBlockArgs } from "./args/DeleteManyBlockArgs";
import { DeleteOneBlockArgs } from "./args/DeleteOneBlockArgs";
import { FindFirstBlockArgs } from "./args/FindFirstBlockArgs";
import { FindFirstBlockOrThrowArgs } from "./args/FindFirstBlockOrThrowArgs";
import { FindManyBlockArgs } from "./args/FindManyBlockArgs";
import { FindUniqueBlockArgs } from "./args/FindUniqueBlockArgs";
import { FindUniqueBlockOrThrowArgs } from "./args/FindUniqueBlockOrThrowArgs";
import { GroupByBlockArgs } from "./args/GroupByBlockArgs";
import { UpdateManyBlockArgs } from "./args/UpdateManyBlockArgs";
import { UpdateOneBlockArgs } from "./args/UpdateOneBlockArgs";
import { UpsertOneBlockArgs } from "./args/UpsertOneBlockArgs";
import { Block } from "../../../models/Block";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBlock } from "../../outputs/AggregateBlock";
import { BlockGroupBy } from "../../outputs/BlockGroupBy";
import { CreateManyAndReturnBlock } from "../../outputs/CreateManyAndReturnBlock";
export declare class BlockCrudResolver {
    aggregateBlock(ctx: any, info: GraphQLResolveInfo, args: AggregateBlockArgs): Promise<AggregateBlock>;
    createManyBlock(ctx: any, info: GraphQLResolveInfo, args: CreateManyBlockArgs): Promise<AffectedRowsOutput>;
    createManyAndReturnBlock(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnBlockArgs): Promise<CreateManyAndReturnBlock[]>;
    createOneBlock(ctx: any, info: GraphQLResolveInfo, args: CreateOneBlockArgs): Promise<Block>;
    deleteManyBlock(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBlockArgs): Promise<AffectedRowsOutput>;
    deleteOneBlock(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBlockArgs): Promise<Block | null>;
    findFirstBlock(ctx: any, info: GraphQLResolveInfo, args: FindFirstBlockArgs): Promise<Block | null>;
    findFirstBlockOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBlockOrThrowArgs): Promise<Block | null>;
    blocks(ctx: any, info: GraphQLResolveInfo, args: FindManyBlockArgs): Promise<Block[]>;
    block(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBlockArgs): Promise<Block | null>;
    getBlock(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBlockOrThrowArgs): Promise<Block | null>;
    groupByBlock(ctx: any, info: GraphQLResolveInfo, args: GroupByBlockArgs): Promise<BlockGroupBy[]>;
    updateManyBlock(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBlockArgs): Promise<AffectedRowsOutput>;
    updateOneBlock(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBlockArgs): Promise<Block | null>;
    upsertOneBlock(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBlockArgs): Promise<Block>;
}
//# sourceMappingURL=BlockCrudResolver.d.ts.map