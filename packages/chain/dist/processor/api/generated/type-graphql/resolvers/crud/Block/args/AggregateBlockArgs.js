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
import { BlockOrderByWithRelationInput } from "../../../inputs/BlockOrderByWithRelationInput";
import { BlockWhereInput } from "../../../inputs/BlockWhereInput";
import { BlockWhereUniqueInput } from "../../../inputs/BlockWhereUniqueInput";
let AggregateBlockArgs = class AggregateBlockArgs {
};
__decorate([
    TypeGraphQL.Field(_type => BlockWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBlockArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BlockOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBlockArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBlockArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBlockArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateBlockArgs.prototype, "skip", void 0);
AggregateBlockArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateBlockArgs);
export { AggregateBlockArgs };
