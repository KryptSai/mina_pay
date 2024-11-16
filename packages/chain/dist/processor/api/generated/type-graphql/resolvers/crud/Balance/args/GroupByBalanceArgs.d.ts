import { BalanceOrderByWithAggregationInput } from "../../../inputs/BalanceOrderByWithAggregationInput";
import { BalanceScalarWhereWithAggregatesInput } from "../../../inputs/BalanceScalarWhereWithAggregatesInput";
import { BalanceWhereInput } from "../../../inputs/BalanceWhereInput";
export declare class GroupByBalanceArgs {
    where?: BalanceWhereInput | undefined;
    orderBy?: BalanceOrderByWithAggregationInput[] | undefined;
    by: Array<"height" | "address" | "amount">;
    having?: BalanceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
//# sourceMappingURL=GroupByBalanceArgs.d.ts.map