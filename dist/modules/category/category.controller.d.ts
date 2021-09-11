import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    create(category: Category): Promise<Category>;
    remove(id: number): Promise<boolean>;
    update(id: number, category: Category): Promise<Category>;
    updatePatch(id: number, category: Category): Promise<Category>;
}
