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
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
let BalanceUpdateManyMutationInput = class BalanceUpdateManyMutationInput {
};
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceUpdateManyMutationInput.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceUpdateManyMutationInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BalanceUpdateManyMutationInput.prototype, "amount", void 0);
BalanceUpdateManyMutationInput = __decorate([
    TypeGraphQL.InputType("BalanceUpdateManyMutationInput", {})
], BalanceUpdateManyMutationInput);
export { BalanceUpdateManyMutationInput };
