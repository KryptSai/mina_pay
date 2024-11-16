import { BlockAvgAggregate } from "../outputs/BlockAvgAggregate";
import { BlockCountAggregate } from "../outputs/BlockCountAggregate";
import { BlockMaxAggregate } from "../outputs/BlockMaxAggregate";
import { BlockMinAggregate } from "../outputs/BlockMinAggregate";
import { BlockSumAggregate } from "../outputs/BlockSumAggregate";
export declare class BlockGroupBy {
    height: number;
    _count: BlockCountAggregate | null;
    _avg: BlockAvgAggregate | null;
    _sum: BlockSumAggregate | null;
    _min: BlockMinAggregate | null;
    _max: BlockMaxAggregate | null;
}
//# sourceMappingURL=BlockGroupBy.d.ts.map