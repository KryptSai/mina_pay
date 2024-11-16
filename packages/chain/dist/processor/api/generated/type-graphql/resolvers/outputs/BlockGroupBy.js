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
import { BlockAvgAggregate } from "../outputs/BlockAvgAggregate";
import { BlockCountAggregate } from "../outputs/BlockCountAggregate";
import { BlockMaxAggregate } from "../outputs/BlockMaxAggregate";
import { BlockMinAggregate } from "../outputs/BlockMinAggregate";
import { BlockSumAggregate } from "../outputs/BlockSumAggregate";
let BlockGroupBy = class BlockGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BlockGroupBy.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockGroupBy.prototype, "_max", void 0);
BlockGroupBy = __decorate([
    TypeGraphQL.ObjectType("BlockGroupBy", {})
], BlockGroupBy);
export { BlockGroupBy };
