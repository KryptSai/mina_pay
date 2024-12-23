import type { GraphQLResolveInfo } from "graphql";
export declare function transformInfoIntoPrismaArgs(info: GraphQLResolveInfo): Record<string, any>;
export declare function getPrismaFromContext(context: any): any;
export declare function transformCountFieldIntoSelectRelationsCount(_count: object): {
    include: {
        _count: {
            select: {
                [x: string]: any;
            };
        };
    };
};
//# sourceMappingURL=helpers.d.ts.map