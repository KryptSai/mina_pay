import { BlockOrderByWithRelationInput } from "../../../inputs/BlockOrderByWithRelationInput";
import { BlockWhereInput } from "../../../inputs/BlockWhereInput";
import { BlockWhereUniqueInput } from "../../../inputs/BlockWhereUniqueInput";
export declare class FindManyBlockArgs {
    where?: BlockWhereInput | undefined;
    orderBy?: BlockOrderByWithRelationInput[] | undefined;
    cursor?: BlockWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: "height"[] | undefined;
}
//# sourceMappingURL=FindManyBlockArgs.d.ts.map