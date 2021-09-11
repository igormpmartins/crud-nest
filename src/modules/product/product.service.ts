import { Inject, Injectable } from "@nestjs/common";
import { MySQLProvider } from "src/database/mysql.provider";
import { Product } from "./product.entity";

@Injectable()
export class ProductService{
    constructor(@Inject('DATABASE') private readonly mySQL: MySQLProvider) {}
    async findAll(): Promise<Product[]> {

        const conn = await this.mySQL.getConnection()
        const [res] = await conn.query('select * from products')
        const resJson = JSON.parse(JSON.stringify(res))

        const prodList = resJson.map(prod => {
            const nprod = new Product()
            nprod.id = prod.id
            nprod.description = prod.description
			nprod.price = prod.price
            return nprod
        })

        return prodList

    }
    async findById(id: number): Promise<Product> {

        const conn = await this.mySQL.getConnection()
        const [res] = await conn.query('select * from products where id = ?', [id])
        const resJson = JSON.parse(JSON.stringify(res))

        const prodList = resJson.map(prod => {
            const nprod = new Product()
            nprod.id = prod.id
            nprod.description = prod.description
            nprod.price = prod.price
            return nprod
        })

        return prodList[0]

    }

    async create(entity: Product): Promise<Product> {
        const conn = await this.mySQL.getConnection()
        await conn.query('insert into products(description, price) values (?, ?)', [entity.description, entity.price])
        return entity
    }

    async remove(id: number): Promise<boolean> {
        const conn = await this.mySQL.getConnection()
        await conn.query('delete from products where id = ?', [id])
        return true
    }

}