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
import { BalanceOrderByWithRelationInput } from "../../../inputs/BalanceOrderByWithRelationInput";
import { BalanceWhereInput } from "../../../inputs/BalanceWhereInput";
import { BalanceWhereUniqueInput } from "../../../inputs/BalanceWhereUniqueInput";
import { BalanceScalarFieldEnum } from "../../../../enums/BalanceScalarFieldEnum";
let FindManyBalanceArgs = class FindManyBalanceArgs {
};
__decorate([
    TypeGraphQL.Field(_type => BalanceWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyBalanceArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BalanceOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyBalanceArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyBalanceArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyBalanceArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyBalanceArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BalanceScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyBalanceArgs.prototype, "distinct", void 0);
FindManyBalanceArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyBalanceArgs);
export { FindManyBalanceArgs };
