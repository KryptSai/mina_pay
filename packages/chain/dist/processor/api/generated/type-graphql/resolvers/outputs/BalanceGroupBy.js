var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as TypeGraphQL from "type-graphql";
import { BalanceAvgAggregate } from "../outputs/BalanceAvgAggregate";
import { BalanceCountAggregate } from "../outputs/BalanceCountAggregate";
import { BalanceMaxAggregate } from "../outputs/BalanceMaxAggregate";
import { BalanceMinAggregate } from "../outputs/BalanceMinAggregate";
import { BalanceSumAggregate } from "../outputs/BalanceSumAggregate";
let BalanceGroupBy = class BalanceGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BalanceGroupBy.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], BalanceGroupBy.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], BalanceGroupBy.prototype, "amount", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceGroupBy.prototype, "_max", void 0);
BalanceGroupBy = __decorate([
    TypeGraphQL.ObjectType("BalanceGroupBy", {})
], BalanceGroupBy);
export { BalanceGroupBy };
