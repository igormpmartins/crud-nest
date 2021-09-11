import { MySQLProvider } from "src/database/mysql.provider";
import { Product } from "./product.entity";
import { ProductImage } from "./product.image.entity";
export declare class ProductService {
    private readonly mySQL;
    constructor(mySQL: MySQLProvider);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    create(entity: Product): Promise<Product>;
    remove(id: number): Promise<boolean>;
    update(id: number, entity: Product): Promise<Product>;
    patch(id: number, entity: Product): Promise<Product>;
    addImage(productId: number, entity: ProductImage): Promise<ProductImage>;
    removeImage(productId: number, id: number): Promise<boolean>;
}
