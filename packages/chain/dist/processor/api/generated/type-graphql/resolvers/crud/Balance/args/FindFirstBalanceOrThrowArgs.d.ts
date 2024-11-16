import { BalanceOrderByWithRelationInput } from "../../../inputs/BalanceOrderByWithRelationInput";
import { BalanceWhereInput } from "../../../inputs/BalanceWhereInput";
import { BalanceWhereUniqueInput } from "../../../inputs/BalanceWhereUniqueInput";
export declare class FindFirstBalanceOrThrowArgs {
    where?: BalanceWhereInput | undefined;
    orderBy?: BalanceOrderByWithRelationInput[] | undefined;
    cursor?: BalanceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"height" | "address" | "amount"> | undefined;
}
//# sourceMappingURL=FindFirstBalanceOrThrowArgs.d.ts.map