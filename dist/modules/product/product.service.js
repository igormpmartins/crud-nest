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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mysql_provider_1 = require("../../database/mysql.provider");
const product_entity_1 = require("./product.entity");
let ProductService = class ProductService {
    constructor(mySQL) {
        this.mySQL = mySQL;
    }
    async findAll() {
        const conn = await this.mySQL.getConnection();
        const [res] = await conn.query('select * from products');
        const resJson = JSON.parse(JSON.stringify(res));
        const prodList = resJson.map(prod => {
            const nprod = new product_entity_1.Product();
            nprod.id = prod.id;
            nprod.description = prod.description;
            nprod.price = prod.price;
            return nprod;
        });
        return prodList;
    }
    async findById(id) {
        const conn = await this.mySQL.getConnection();
        const [res] = await conn.query('select * from products where id = ?', [id]);
        const resJson = JSON.parse(JSON.stringify(res));
        const prodList = resJson.map(prod => {
            const nprod = new product_entity_1.Product();
            nprod.id = prod.id;
            nprod.description = prod.description;
            nprod.price = prod.price;
            return nprod;
        });
        return prodList[0];
    }
    async create(entity) {
        const conn = await this.mySQL.getConnection();
        await conn.query('insert into products(description, price) values (?, ?)', [entity.description, entity.price]);
        return entity;
    }
    async remove(id) {
        console.log('teste');
        const conn = await this.mySQL.getConnection();
        await conn.query('delete from products where id = ?', [id]);
        return true;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE')),
    __metadata("design:paramtypes", [mysql_provider_1.MySQLProvider])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map