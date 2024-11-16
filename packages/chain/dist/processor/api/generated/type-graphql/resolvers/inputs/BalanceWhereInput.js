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
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
let BalanceWhereInput = class BalanceWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [BalanceWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BalanceWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BalanceWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceWhereInput.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceWhereInput.prototype, "amount", void 0);
BalanceWhereInput = __decorate([
    TypeGraphQL.InputType("BalanceWhereInput", {})
], BalanceWhereInput);
export { BalanceWhereInput };
