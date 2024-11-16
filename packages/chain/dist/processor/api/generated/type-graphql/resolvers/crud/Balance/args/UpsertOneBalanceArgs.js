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
import { BalanceCreateInput } from "../../../inputs/BalanceCreateInput";
import { BalanceUpdateInput } from "../../../inputs/BalanceUpdateInput";
import { BalanceWhereUniqueInput } from "../../../inputs/BalanceWhereUniqueInput";
let UpsertOneBalanceArgs = class UpsertOneBalanceArgs {
};
__decorate([
    TypeGraphQL.Field(_type => BalanceWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", BalanceWhereUniqueInput)
], UpsertOneBalanceArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceCreateInput, {
        nullable: false
    }),
    __metadata("design:type", BalanceCreateInput)
], UpsertOneBalanceArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => BalanceUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", BalanceUpdateInput)
], UpsertOneBalanceArgs.prototype, "update", void 0);
UpsertOneBalanceArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBalanceArgs);
export { UpsertOneBalanceArgs };
