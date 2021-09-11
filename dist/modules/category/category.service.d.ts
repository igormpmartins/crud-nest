import { MySQLProvider } from "src/database/mysql.provider";
import { Category } from "./category.entity";
export declare class CategoryService {
    private readonly mySQL;
    constructor(mySQL: MySQLProvider);
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    create(entity: Category): Promise<Category>;
    remove(id: number): Promise<boolean>;
    update(id: number, entity: Category): Promise<Category>;
}
