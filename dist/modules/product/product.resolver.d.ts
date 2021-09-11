import { Product } from "./dto/product";
import { ProductService } from "./product.service";
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<Product[]>;
}
