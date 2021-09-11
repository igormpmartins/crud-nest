import { MySQLProvider } from "src/database/mysql.provider";
import { Product } from "./product.entity";
export declare class ProductService {
    private readonly mySQL;
    constructor(mySQL: MySQLProvider);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    create(entity: Product): Promise<Product>;
    remove(id: number): Promise<boolean>;
}
