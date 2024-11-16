var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as TypeGraphQL from "type-graphql";
import { AggregateBlockArgs } from "./args/AggregateBlockArgs";
import { CreateManyAndReturnBlockArgs } from "./args/CreateManyAndReturnBlockArgs";
import { CreateManyBlockArgs } from "./args/CreateManyBlockArgs";
import { CreateOneBlockArgs } from "./args/CreateOneBlockArgs";
import { DeleteManyBlockArgs } from "./args/DeleteManyBlockArgs";
import { DeleteOneBlockArgs } from "./args/DeleteOneBlockArgs";
import { FindFirstBlockArgs } from "./args/FindFirstBlockArgs";
import { FindFirstBlockOrThrowArgs } from "./args/FindFirstBlockOrThrowArgs";
import { FindManyBlockArgs } from "./args/FindManyBlockArgs";
import { FindUniqueBlockArgs } from "./args/FindUniqueBlockArgs";
import { FindUniqueBlockOrThrowArgs } from "./args/FindUniqueBlockOrThrowArgs";
import { GroupByBlockArgs } from "./args/GroupByBlockArgs";
import { UpdateManyBlockArgs } from "./args/UpdateManyBlockArgs";
import { UpdateOneBlockArgs } from "./args/UpdateOneBlockArgs";
import { UpsertOneBlockArgs } from "./args/UpsertOneBlockArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Block } from "../../../models/Block";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBlock } from "../../outputs/AggregateBlock";
import { BlockGroupBy } from "../../outputs/BlockGroupBy";
import { CreateManyAndReturnBlock } from "../../outputs/CreateManyAndReturnBlock";
let BlockCrudResolver = class BlockCrudResolver {
    async aggregateBlock(ctx, info, args) {
        return getPrismaFromContext(ctx).block.aggregate({
            ...args,
            ...transformInfoIntoPrismaArgs(info),
        });
    }
    async createManyBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.createMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyAndReturnBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.createManyAndReturn({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOneBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.create({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.deleteMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOneBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.delete({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.findFirst({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstBlockOrThrow(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.findFirstOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async blocks(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.findMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async block(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.findUnique({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async getBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.findUniqueOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async groupByBlock(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.updateMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOneBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.update({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOneBlock(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).block.upsert({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateBlock, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "aggregateBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "createManyBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBlock], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "createManyAndReturnBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Block, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "createOneBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "deleteManyBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Block, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "deleteOneBlock", null);
__decorate([
    TypeGraphQL.Query(_returns => Block, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "findFirstBlock", null);
__decorate([
    TypeGraphQL.Query(_returns => Block, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBlockOrThrowArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "findFirstBlockOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Block], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "blocks", null);
__decorate([
    TypeGraphQL.Query(_returns => Block, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "block", null);
__decorate([
    TypeGraphQL.Query(_returns => Block, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBlockOrThrowArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "getBlock", null);
__decorate([
    TypeGraphQL.Query(_returns => [BlockGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "groupByBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "updateManyBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Block, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "updateOneBlock", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Block, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneBlockArgs]),
    __metadata("design:returntype", Promise)
], BlockCrudResolver.prototype, "upsertOneBlock", null);
BlockCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Block)
], BlockCrudResolver);
export { BlockCrudResolver };
