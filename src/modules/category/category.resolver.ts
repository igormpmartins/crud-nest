import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { identity } from "rxjs";
import { CategoryService } from "./category.service";
import { Category } from "./dto/category";
import { CategoryInput } from "./dto/category.input";

@Resolver(of => Category)
export class CategoryResolver{
    constructor(private readonly categoryService: CategoryService) {}

    @Query(returns => [Category], {name: 'getAllCategories'})
    async getAllCategories(): Promise<Category[]> {
        return this.categoryService.findAll()
    }

    @Mutation(returns => Boolean, {name: 'removeCategory'})
    async removeCategory(@Args('id') id: number): Promise<Boolean> {
        return this.categoryService.remove(id)
    }

    @Mutation(returns => Category, {name: 'updateCategory'})
    async updateCategory(@Args('id') id: number, @Args('input') input: CategoryInput): Promise<Category> {
        return this.categoryService.update(id, input)
    }

    @Mutation(returns => Category, {name: 'createCategory'})
    async createCategory(@Args('input') input: CategoryInput): Promise<Category> {
        return this.categoryService.create(input)
    }

}