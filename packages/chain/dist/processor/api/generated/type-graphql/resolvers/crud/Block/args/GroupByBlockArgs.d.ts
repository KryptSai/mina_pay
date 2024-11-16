import { BlockOrderByWithAggregationInput } from "../../../inputs/BlockOrderByWithAggregationInput";
import { BlockScalarWhereWithAggregatesInput } from "../../../inputs/BlockScalarWhereWithAggregatesInput";
import { BlockWhereInput } from "../../../inputs/BlockWhereInput";
export declare class GroupByBlockArgs {
    where?: BlockWhereInput | undefined;
    orderBy?: BlockOrderByWithAggregationInput[] | undefined;
    by: "height"[];
    having?: BlockScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
//# sourceMappingURL=GroupByBlockArgs.d.ts.map