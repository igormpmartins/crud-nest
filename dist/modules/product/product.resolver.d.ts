import { Product } from "./dto/product";
import { ProductInput } from "./dto/product.input";
import { ProductService } from "./product.service";
import { ImageInput } from "./dto/image.input";
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): Promise<Product[]>;
    create(input: ProductInput): Promise<Product>;
    remove(id: number): Promise<boolean>;
    updateProduct(id: number, input: ProductInput): Promise<import("./product.entity").Product>;
    createImageOnProduct(productId: number, input: ImageInput): Promise<import("./product.image.entity").ProductImage>;
    removeImageOnProduct(productId: number, id: number): Promise<boolean>;
}
