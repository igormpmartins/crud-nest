import { Product } from './product.entity';
import { ProductImage } from './product.image.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    create(product: any): Promise<Product>;
    remove(id: number): Promise<boolean>;
    put(id: number, product: any): Promise<Product>;
    patch(id: number, product: any): Promise<Product>;
    createImage(id: number, image: any): Promise<ProductImage>;
    removeImage(productId: number, id: number): Promise<boolean>;
}
