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
exports.MySQLProvider = void 0;
const common_1 = require("@nestjs/common");
const promise_1 = require("mysql2/promise");
let MySQLProvider = class MySQLProvider {
    constructor() {
        this.logger = new common_1.Logger('MySQLProvider');
        this.logger.log('initialized - MySQL Provider');
        this.pool = (0, promise_1.createPool)({
            host: 'localhost',
            user: 'root',
            database: 'cat-products',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }
    async getConnection() {
        return await this.pool.getConnection();
    }
};
MySQLProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MySQLProvider);
exports.MySQLProvider = MySQLProvider;
//# sourceMappingURL=mysql.provider.js.map