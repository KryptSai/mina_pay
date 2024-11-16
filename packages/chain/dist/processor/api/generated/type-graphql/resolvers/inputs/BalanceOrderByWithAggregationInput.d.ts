import { BalanceAvgOrderByAggregateInput } from "../inputs/BalanceAvgOrderByAggregateInput";
import { BalanceCountOrderByAggregateInput } from "../inputs/BalanceCountOrderByAggregateInput";
import { BalanceMaxOrderByAggregateInput } from "../inputs/BalanceMaxOrderByAggregateInput";
import { BalanceMinOrderByAggregateInput } from "../inputs/BalanceMinOrderByAggregateInput";
import { BalanceSumOrderByAggregateInput } from "../inputs/BalanceSumOrderByAggregateInput";
export declare class BalanceOrderByWithAggregationInput {
    height?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    _count?: BalanceCountOrderByAggregateInput | undefined;
    _avg?: BalanceAvgOrderByAggregateInput | undefined;
    _max?: BalanceMaxOrderByAggregateInput | undefined;
    _min?: BalanceMinOrderByAggregateInput | undefined;
    _sum?: BalanceSumOrderByAggregateInput | undefined;
}
//# sourceMappingURL=BalanceOrderByWithAggregationInput.d.ts.map