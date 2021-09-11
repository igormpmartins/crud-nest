import { Product } from "./dto/product";
import { ProductInput } from "./dto/product.input";
import { ProductService } from "./product.service";
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<Product[]>;
    create(input: ProductInput): Promise<Product>;
}
