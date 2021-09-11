import { Product } from './product.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    create(product: any): Promise<Product>;
    remove(id: number): Promise<boolean>;
}
