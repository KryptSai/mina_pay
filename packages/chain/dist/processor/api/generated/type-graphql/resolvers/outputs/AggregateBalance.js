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
let AggregateBalance = class AggregateBalance {
};
__decorate([
    TypeGraphQL.Field(_type => BalanceCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBalance.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBalance.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBalance.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBalance.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBalance.prototype, "_max", void 0);
AggregateBalance = __decorate([
    TypeGraphQL.ObjectType("AggregateBalance", {})
], AggregateBalance);
export { AggregateBalance };
