import { CategoryService } from "./category.service";
import { Category } from "./dto/category";
import { CategoryInput } from "./dto/category.input";
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<Category[]>;
    removeCategory(id: number): Promise<Boolean>;
    updateCategory(id: number, input: CategoryInput): Promise<Category>;
    createCategory(input: CategoryInput): Promise<Category>;
}
