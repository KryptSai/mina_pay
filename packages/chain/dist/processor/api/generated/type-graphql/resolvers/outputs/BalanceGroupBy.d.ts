import { BalanceAvgAggregate } from "../outputs/BalanceAvgAggregate";
import { BalanceCountAggregate } from "../outputs/BalanceCountAggregate";
import { BalanceMaxAggregate } from "../outputs/BalanceMaxAggregate";
import { BalanceMinAggregate } from "../outputs/BalanceMinAggregate";
import { BalanceSumAggregate } from "../outputs/BalanceSumAggregate";
export declare class BalanceGroupBy {
    height: number;
    address: string;
    amount: string;
    _count: BalanceCountAggregate | null;
    _avg: BalanceAvgAggregate | null;
    _sum: BalanceSumAggregate | null;
    _min: BalanceMinAggregate | null;
    _max: BalanceMaxAggregate | null;
}
//# sourceMappingURL=BalanceGroupBy.d.ts.map