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
import { BlockAvgOrderByAggregateInput } from "../inputs/BlockAvgOrderByAggregateInput";
import { BlockCountOrderByAggregateInput } from "../inputs/BlockCountOrderByAggregateInput";
import { BlockMaxOrderByAggregateInput } from "../inputs/BlockMaxOrderByAggregateInput";
import { BlockMinOrderByAggregateInput } from "../inputs/BlockMinOrderByAggregateInput";
import { BlockSumOrderByAggregateInput } from "../inputs/BlockSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";
let BlockOrderByWithAggregationInput = class BlockOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockOrderByWithAggregationInput.prototype, "height", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BlockSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BlockOrderByWithAggregationInput.prototype, "_sum", void 0);
BlockOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("BlockOrderByWithAggregationInput", {})
], BlockOrderByWithAggregationInput);
export { BlockOrderByWithAggregationInput };
