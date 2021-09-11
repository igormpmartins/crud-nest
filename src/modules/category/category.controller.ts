import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";

@Controller('categories')
export class CategoryController{
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll()
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Category> {
        return this.categoryService.findById(id)
    }

    @Post()
    async create(@Body() category: Category): Promise<Category> {
        return this.categoryService.create(category)
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<boolean> {
        return this.categoryService.remove(id)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() category: Category): Promise<Category> {
        return this.categoryService.update(id, category)
    }
    @Patch(':id')
    async updatePatch(@Param('id') id: number, @Body() category: Category): Promise<Category> {
        return this.categoryService.update(id, category)
    }

}