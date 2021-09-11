import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Product } from './product.entity'
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
}
