import type { GraphQLResolveInfo } from "graphql";
import { AggregateBalanceArgs } from "./args/AggregateBalanceArgs";
import { CreateManyAndReturnBalanceArgs } from "./args/CreateManyAndReturnBalanceArgs";
import { CreateManyBalanceArgs } from "./args/CreateManyBalanceArgs";
import { CreateOneBalanceArgs } from "./args/CreateOneBalanceArgs";
import { DeleteManyBalanceArgs } from "./args/DeleteManyBalanceArgs";
import { DeleteOneBalanceArgs } from "./args/DeleteOneBalanceArgs";
import { FindFirstBalanceArgs } from "./args/FindFirstBalanceArgs";
import { FindFirstBalanceOrThrowArgs } from "./args/FindFirstBalanceOrThrowArgs";
import { FindManyBalanceArgs } from "./args/FindManyBalanceArgs";
import { FindUniqueBalanceArgs } from "./args/FindUniqueBalanceArgs";
import { FindUniqueBalanceOrThrowArgs } from "./args/FindUniqueBalanceOrThrowArgs";
import { GroupByBalanceArgs } from "./args/GroupByBalanceArgs";
import { UpdateManyBalanceArgs } from "./args/UpdateManyBalanceArgs";
import { UpdateOneBalanceArgs } from "./args/UpdateOneBalanceArgs";
import { UpsertOneBalanceArgs } from "./args/UpsertOneBalanceArgs";
import { Balance } from "../../../models/Balance";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBalance } from "../../outputs/AggregateBalance";
import { BalanceGroupBy } from "../../outputs/BalanceGroupBy";
import { CreateManyAndReturnBalance } from "../../outputs/CreateManyAndReturnBalance";
export declare class BalanceCrudResolver {
    aggregateBalance(ctx: any, info: GraphQLResolveInfo, args: AggregateBalanceArgs): Promise<AggregateBalance>;
    createManyBalance(ctx: any, info: GraphQLResolveInfo, args: CreateManyBalanceArgs): Promise<AffectedRowsOutput>;
    createManyAndReturnBalance(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnBalanceArgs): Promise<CreateManyAndReturnBalance[]>;
    createOneBalance(ctx: any, info: GraphQLResolveInfo, args: CreateOneBalanceArgs): Promise<Balance>;
    deleteManyBalance(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBalanceArgs): Promise<AffectedRowsOutput>;
    deleteOneBalance(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBalanceArgs): Promise<Balance | null>;
    findFirstBalance(ctx: any, info: GraphQLResolveInfo, args: FindFirstBalanceArgs): Promise<Balance | null>;
    findFirstBalanceOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBalanceOrThrowArgs): Promise<Balance | null>;
    balances(ctx: any, info: GraphQLResolveInfo, args: FindManyBalanceArgs): Promise<Balance[]>;
    balance(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBalanceArgs): Promise<Balance | null>;
    getBalance(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBalanceOrThrowArgs): Promise<Balance | null>;
    groupByBalance(ctx: any, info: GraphQLResolveInfo, args: GroupByBalanceArgs): Promise<BalanceGroupBy[]>;
    updateManyBalance(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBalanceArgs): Promise<AffectedRowsOutput>;
    updateOneBalance(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBalanceArgs): Promise<Balance | null>;
    upsertOneBalance(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBalanceArgs): Promise<Balance>;
}
//# sourceMappingURL=BalanceCrudResolver.d.ts.map