import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "./dto/product";
import { ProductInput } from "./dto/product.input";
import { ProductService } from "./product.service";

@Resolver(of => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {

    }
    @Query(returns => [Product], {name: 'getAllProducts'})
    async getAllProducts(): Promise<Product[]> {
        const products = await this.productService.findAll()
        //TypeScript consegue converter entre a classe e o DTO! Então poderia ser feito como na linha comentada.
        //return products

        const prodsDto = products.map(p => {
            const prod = new Product()
            prod.id = p.id
            prod.description = p.description
            prod.price = p.price
            return prod
        })

        return prodsDto

    }
    @Mutation(returns => Product, {name: 'createProduct'})
    async create(@Args('input') input: ProductInput): Promise<Product> {
        return this.productService.create(input)
    }
}