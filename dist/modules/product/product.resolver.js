"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_1 = require("./dto/product");
const product_service_1 = require("./product.service");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    async getAllProducts() {
        const products = await this.productService.findAll();
        const prodsDto = products.map(p => {
            const prod = new product_1.Product();
            prod.id = p.id;
            prod.description = p.description;
            prod.price = p.price;
            return prod;
        });
        return prodsDto;
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [product_1.Product], { name: 'getAllProducts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getAllProducts", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(of => product_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map