import { BalanceHeightAddressCompoundUniqueInput } from "../inputs/BalanceHeightAddressCompoundUniqueInput";
import { BalanceWhereInput } from "../inputs/BalanceWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BalanceWhereUniqueInput {
    height_address?: BalanceHeightAddressCompoundUniqueInput | undefined;
    AND?: BalanceWhereInput[] | undefined;
    OR?: BalanceWhereInput[] | undefined;
    NOT?: BalanceWhereInput[] | undefined;
    height?: IntFilter | undefined;
    address?: StringFilter | undefined;
    amount?: StringFilter | undefined;
}
//# sourceMappingURL=BalanceWhereUniqueInput.d.ts.map