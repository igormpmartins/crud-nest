import { Inject, Injectable } from "@nestjs/common";
import { MySQLProvider } from "src/database/mysql.provider";
import { Product } from "./product.entity";
import { ProductImage } from "./product.image.entity";

@Injectable()
export class ProductService{
    constructor(@Inject('DATABASE') private readonly mySQL: MySQLProvider) {}

    async findImages(products): Promise<Product[]> {

        if (products.length === 0) {
            return products
        } else {

            const conn = await this.mySQL.getConnection()

            const listIds = products.map(item=>item.id).join(',')
            const [imagesDB] = await conn.query(`select * from images where product_id in (${listIds})`)
            const imgJson = JSON.parse(JSON.stringify(imagesDB))

            const mapImages = imgJson.reduce((prev, curr)=> {
                return {
                    ...prev,
                    [curr.product_id]:curr
                }
            }, {})

            const productsImg = products.map(prod=> {
                const prodConv = new Product()
                prodConv.id = prod.id
                prodConv.description = prod.description
                prodConv.price = prod.price

                prodConv.image = mapImages[prod.id]

                return prodConv

            })

            console.log(productsImg)
            
            return productsImg


        }

    }

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

        //return prodList
        return this.findImages(prodList)

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

    async update(id: number, entity: Product): Promise<Product> {
        const conn = await this.mySQL.getConnection()
        await conn
            .query('UPDATE products SET description = ?, price = ? WHERE id = ?', [entity.description, entity.price , id])

        return entity
    }

    async patch(id: number, entity: Product): Promise<Product> {

        const prod = await this.findById(id)

        if (entity.description) {
            prod.description = entity.description
        }

        if (entity.price) {
            prod.price = entity.price
        }

        await this.update(id, prod)

        return prod

    }

    async addImage(productId: number, entity: ProductImage): Promise<ProductImage> {
        console.log('aki', entity)
        const conn = await this.mySQL.getConnection()
        await conn
            .query('INSERT INTO images (product_id, description, url) VALUES (?, ?, ?)', [productId, entity.description, entity.url])

        return entity
    }

    async removeImage(productId: number, id: number): Promise<boolean> {
        const conn = await this.mySQL.getConnection()
        await conn.query('DELETE FROM images WHERE product_id = ? and id = ? LIMIT 1', [productId, id])
        return true
    }

}