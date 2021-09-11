import { Inject, Injectable } from "@nestjs/common";
import { MySQLProvider } from "src/database/mysql.provider";
import { Category } from "./category.entity";

@Injectable()
export class CategoryService {
    constructor(@Inject('DATABASE') private readonly mySQL: MySQLProvider) {}
    
    async findAll(): Promise<Category[]> {
        const conn = await this.mySQL.getConnection()
        const [res] = await conn.query('select * from categories')
        const cats = JSON.parse(JSON.stringify(res))
        return cats
    }

    async findById(id: number): Promise<Category> {
        const conn = await this.mySQL.getConnection()
        const [res] = await conn.query('select * from categories where id = ?', [id])
        const cats = JSON.parse(JSON.stringify(res))
        return cats[0]
    }

    async create(entity: Category) {
        const conn = await this.mySQL.getConnection()
        const [res] = await conn.query('INSERT INTO categories (category) VALUES (?)', [entity.category])
        const conv = JSON.parse(JSON.stringify(res))
        return this.findById(conv.insertId)
    }

    async remove(id: number) {
        const conn = await this.mySQL.getConnection()
        await conn.query('DELETE FROM categories WHERE id =? LIMIT 1', id)
        return true
    }

    async update(id: number, entity: Category) {
        const conn = await this.mySQL.getConnection()
        await conn.query('UPDATE categories SET category = ? WHERE id = ?', [entity.category, id])
        return this.findById(id)
    }

}