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
import { BalanceAvgOrderByAggregateInput } from "../inputs/BalanceAvgOrderByAggregateInput";
import { BalanceCountOrderByAggregateInput } from "../inputs/BalanceCountOrderByAggregateInput";
import { BalanceMaxOrderByAggregateInput } from "../inputs/BalanceMaxOrderByAggregateInput";
import { BalanceMinOrderByAggregateInput } from "../inputs/BalanceMinOrderByAggregateInput";
import { BalanceSumOrderByAggregateInput } from "../inputs/BalanceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";
let BalanceOrderByWithAggregationInput = class BalanceOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceOrderByWithAggregationInput.prototype, "_sum", void 0);
BalanceOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("BalanceOrderByWithAggregationInput", {})
], BalanceOrderByWithAggregationInput);
export { BalanceOrderByWithAggregationInput };
