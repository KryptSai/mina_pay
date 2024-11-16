import { BlockAvgOrderByAggregateInput } from "../inputs/BlockAvgOrderByAggregateInput";
import { BlockCountOrderByAggregateInput } from "../inputs/BlockCountOrderByAggregateInput";
import { BlockMaxOrderByAggregateInput } from "../inputs/BlockMaxOrderByAggregateInput";
import { BlockMinOrderByAggregateInput } from "../inputs/BlockMinOrderByAggregateInput";
import { BlockSumOrderByAggregateInput } from "../inputs/BlockSumOrderByAggregateInput";
export declare class BlockOrderByWithAggregationInput {
    height?: "asc" | "desc" | undefined;
    _count?: BlockCountOrderByAggregateInput | undefined;
    _avg?: BlockAvgOrderByAggregateInput | undefined;
    _max?: BlockMaxOrderByAggregateInput | undefined;
    _min?: BlockMinOrderByAggregateInput | undefined;
    _sum?: BlockSumOrderByAggregateInput | undefined;
}
//# sourceMappingURL=BlockOrderByWithAggregationInput.d.ts.map