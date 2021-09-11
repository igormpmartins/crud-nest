import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common'
import { Product } from './product.entity'
import { ProductImage } from './product.image.entity'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}
	@Get()
	async findAll(): Promise<Product[]> {
		return this.productService.findAll()
	}
	@Get(':id')
	async findById(@Param('id') id: number): Promise<Product> {
		return this.productService.findById(id)
	}
	@Post()
	async create(@Body() product): Promise<Product> {
		return this.productService.create(product)
	}
	@Delete(':id')
	async remove(@Param('id') id: number): Promise<boolean> {
		return this.productService.remove(id)
	}
	@Put(':id')
	async put(@Param('id') id: number, @Body() product): Promise<Product> {
		return this.productService.update(id, product)
	}
	@Patch(':id')
	async patch(@Param('id') id: number, @Body() product): Promise<Product> {
		return this.productService.patch(id, product)
	}

	@Post(':id/images')
	async createImage(@Param('id') id: number, @Body() image): Promise<ProductImage>{
		return this.productService.addImage(id, image)
	}

	@Delete(':productId/images/:id')
	async removeImage(@Param('productId') productId: number, @Param('id') id: number): Promise<boolean>{
		return this.productService.removeImage(productId, id)
	}

	//falta categorias

}
