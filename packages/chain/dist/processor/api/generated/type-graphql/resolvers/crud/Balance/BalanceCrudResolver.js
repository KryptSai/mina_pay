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
import { AggregateBalanceArgs } from "./args/AggregateBalanceArgs";
import { CreateManyAndReturnBalanceArgs } from "./args/CreateManyAndReturnBalanceArgs";
import { CreateManyBalanceArgs } from "./args/CreateManyBalanceArgs";
import { CreateOneBalanceArgs } from "./args/CreateOneBalanceArgs";
import { DeleteManyBalanceArgs } from "./args/DeleteManyBalanceArgs";
import { DeleteOneBalanceArgs } from "./args/DeleteOneBalanceArgs";
import { FindFirstBalanceArgs } from "./args/FindFirstBalanceArgs";
import { FindFirstBalanceOrThrowArgs } from "./args/FindFirstBalanceOrThrowArgs";
import { FindManyBalanceArgs } from "./args/FindManyBalanceArgs";
import { FindUniqueBalanceArgs } from "./args/FindUniqueBalanceArgs";
import { FindUniqueBalanceOrThrowArgs } from "./args/FindUniqueBalanceOrThrowArgs";
import { GroupByBalanceArgs } from "./args/GroupByBalanceArgs";
import { UpdateManyBalanceArgs } from "./args/UpdateManyBalanceArgs";
import { UpdateOneBalanceArgs } from "./args/UpdateOneBalanceArgs";
import { UpsertOneBalanceArgs } from "./args/UpsertOneBalanceArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Balance } from "../../../models/Balance";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBalance } from "../../outputs/AggregateBalance";
import { BalanceGroupBy } from "../../outputs/BalanceGroupBy";
import { CreateManyAndReturnBalance } from "../../outputs/CreateManyAndReturnBalance";
let BalanceCrudResolver = class BalanceCrudResolver {
    async aggregateBalance(ctx, info, args) {
        return getPrismaFromContext(ctx).balance.aggregate({
            ...args,
            ...transformInfoIntoPrismaArgs(info),
        });
    }
    async createManyBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.createMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyAndReturnBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.createManyAndReturn({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOneBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.create({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.deleteMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOneBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.delete({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.findFirst({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstBalanceOrThrow(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.findFirstOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async balances(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.findMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async balance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.findUnique({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async getBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.findUniqueOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async groupByBalance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.updateMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOneBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.update({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOneBalance(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).balance.upsert({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateBalance, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "aggregateBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "createManyBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBalance], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "createManyAndReturnBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Balance, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "createOneBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "deleteManyBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Balance, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "deleteOneBalance", null);
__decorate([
    TypeGraphQL.Query(_returns => Balance, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "findFirstBalance", null);
__decorate([
    TypeGraphQL.Query(_returns => Balance, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBalanceOrThrowArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "findFirstBalanceOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Balance], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "balances", null);
__decorate([
    TypeGraphQL.Query(_returns => Balance, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "balance", null);
__decorate([
    TypeGraphQL.Query(_returns => Balance, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBalanceOrThrowArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "getBalance", null);
__decorate([
    TypeGraphQL.Query(_returns => [BalanceGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "groupByBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "updateManyBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Balance, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "updateOneBalance", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Balance, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneBalanceArgs]),
    __metadata("design:returntype", Promise)
], BalanceCrudResolver.prototype, "upsertOneBalance", null);
BalanceCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Balance)
], BalanceCrudResolver);
export { BalanceCrudResolver };
