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
import { BlockUpdateInput } from "../../../inputs/BlockUpdateInput";
import { BlockWhereUniqueInput } from "../../../inputs/BlockWhereUniqueInput";
let UpdateOneBlockArgs = class UpdateOneBlockArgs {
};
__decorate([
    TypeGraphQL.Field(_type => BlockUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", BlockUpdateInput)
], UpdateOneBlockArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", BlockWhereUniqueInput)
], UpdateOneBlockArgs.prototype, "where", void 0);
UpdateOneBlockArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBlockArgs);
export { UpdateOneBlockArgs };
