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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_1 = require("./dto/product");
const image_1 = require("./dto/image");
const product_input_1 = require("./dto/product.input");
const product_service_1 = require("./product.service");
const image_input_1 = require("./dto/image.input");
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
            prod.image = p.image;
            return prod;
        });
        return prodsDto;
    }
    async create(input) {
        return this.productService.create(input);
    }
    async remove(id) {
        return this.productService.remove(id);
    }
    async updateProduct(id, input) {
        return this.productService.update(id, input);
    }
    async createImageOnProduct(productId, input) {
        return this.productService.addImage(productId, input);
    }
    async removeImageOnProduct(productId, id) {
        return this.productService.removeImage(productId, id);
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [product_1.Product], { name: 'getAllProducts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getAllProducts", null);
__decorate([
    (0, graphql_1.Mutation)(returns => product_1.Product, { name: 'createProduct' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_input_1.ProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(returns => Boolean, { name: 'removeProduct' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "remove", null);
__decorate([
    (0, graphql_1.Mutation)(returns => product_1.Product, { name: 'updateProduct' }),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_input_1.ProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(returns => image_1.Image, { name: 'createImageOnProduct' }),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, image_input_1.ImageInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createImageOnProduct", null);
__decorate([
    (0, graphql_1.Mutation)(returns => Boolean, { name: 'removeImageOnProduct' }),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "removeImageOnProduct", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(of => product_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map