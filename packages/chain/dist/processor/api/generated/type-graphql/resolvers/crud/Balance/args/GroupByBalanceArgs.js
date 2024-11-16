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
import { BalanceOrderByWithAggregationInput } from "../../../inputs/BalanceOrderByWithAggregationInput";
import { BalanceScalarWhereWithAggregatesInput } from "../../../inputs/BalanceScalarWhereWithAggregatesInput";
import { BalanceWhereInput } from "../../../inputs/BalanceWhereInput";
import { BalanceScalarFieldEnum } from "../../../../enums/BalanceScalarFieldEnum";
let GroupByBalanceArgs = class GroupByBalanceArgs {
};
__decorate([
    TypeGraphQL.Field(_type => BalanceWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByBalanceArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BalanceOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByBalanceArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BalanceScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByBalanceArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByBalanceArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByBalanceArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByBalanceArgs.prototype, "skip", void 0);
GroupByBalanceArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByBalanceArgs);
export { GroupByBalanceArgs };
