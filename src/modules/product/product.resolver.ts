import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "./dto/product";
import { Image } from "./dto/image";
import { ProductInput } from "./dto/product.input";
import { ProductService } from "./product.service";
import { ImageInput } from "./dto/image.input";

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
            prod.image = p.image
            return prod
        })

        return prodsDto

    }
    @Mutation(returns => Product, {name: 'createProduct'})
    async create(@Args('input') input: ProductInput): Promise<Product> {
        return this.productService.create(input)
    }

    @Mutation(returns => Boolean, {name: 'removeProduct'})
    async remove(@Args('id') id: number): Promise<boolean> {
        return this.productService.remove(id)
    }

    @Mutation(returns => Product, {name: 'updateProduct'})
    async updateProduct(@Args('id') id: number, @Args('input') input: ProductInput) {
         return this.productService.update(id, input)
    }

    @Mutation(returns => Image, {name: 'createImageOnProduct'})
    async createImageOnProduct(@Args('productId') productId: number, @Args('input') input: ImageInput) {
        return this.productService.addImage(productId, input)
    }

    @Mutation(returns => Boolean, {name: 'removeImageOnProduct'})
    async removeImageOnProduct(@Args('productId') productId: number, @Args('id') id: number): Promise<boolean> {
        return this.productService.removeImage(productId, id)
    }

}