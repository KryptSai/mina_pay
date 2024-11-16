import type { GraphQLResolveInfo } from "graphql";
import { FindManyBalanceArgs } from "./args/FindManyBalanceArgs";
import { Balance } from "../../../models/Balance";
export declare class FindManyBalanceResolver {
    balances(ctx: any, info: GraphQLResolveInfo, args: FindManyBalanceArgs): Promise<Balance[]>;
}
//# sourceMappingURL=FindManyBalanceResolver.d.ts.map