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
import { BlockCreateManyInput } from "../../../inputs/BlockCreateManyInput";
let CreateManyBlockArgs = class CreateManyBlockArgs {
};
__decorate([
    TypeGraphQL.Field(_type => [BlockCreateManyInput], {
        nullable: false
    }),
    __metadata("design:type", Array)
], CreateManyBlockArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CreateManyBlockArgs.prototype, "skipDuplicates", void 0);
CreateManyBlockArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateManyBlockArgs);
export { CreateManyBlockArgs };
