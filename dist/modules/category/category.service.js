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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mysql_provider_1 = require("../../database/mysql.provider");
let CategoryService = class CategoryService {
    constructor(mySQL) {
        this.mySQL = mySQL;
    }
    async findAll() {
        const conn = await this.mySQL.getConnection();
        const [res] = await conn.query('select * from categories');
        const cats = JSON.parse(JSON.stringify(res));
        return cats;
    }
    async findById(id) {
        const conn = await this.mySQL.getConnection();
        const [res] = await conn.query('select * from categories where id = ?', [id]);
        const cats = JSON.parse(JSON.stringify(res));
        return cats[0];
    }
    async create(entity) {
        const conn = await this.mySQL.getConnection();
        const [res] = await conn.query('INSERT INTO categories (category) VALUES (?)', [entity.category]);
        const conv = JSON.parse(JSON.stringify(res));
        return this.findById(conv.insertId);
    }
    async remove(id) {
        const conn = await this.mySQL.getConnection();
        await conn.query('DELETE FROM categories WHERE id =? LIMIT 1', id);
        return true;
    }
    async update(id, entity) {
        const conn = await this.mySQL.getConnection();
        await conn.query('UPDATE categories SET category = ? WHERE id = ?', [entity.category, id]);
        return this.findById(id);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE')),
    __metadata("design:paramtypes", [mysql_provider_1.MySQLProvider])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map