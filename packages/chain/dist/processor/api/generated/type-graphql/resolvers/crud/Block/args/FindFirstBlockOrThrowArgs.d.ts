import { BlockOrderByWithRelationInput } from "../../../inputs/BlockOrderByWithRelationInput";
import { BlockWhereInput } from "../../../inputs/BlockWhereInput";
import { BlockWhereUniqueInput } from "../../../inputs/BlockWhereUniqueInput";
export declare class FindFirstBlockOrThrowArgs {
    where?: BlockWhereInput | undefined;
    orderBy?: BlockOrderByWithRelationInput[] | undefined;
    cursor?: BlockWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: "height"[] | undefined;
}
//# sourceMappingURL=FindFirstBlockOrThrowArgs.d.ts.map