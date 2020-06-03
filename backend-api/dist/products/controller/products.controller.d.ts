import { ProductsService } from '../service/products.service';
import { ProductDto } from '../dto/product.dto';
import { ProductType } from '../interfaces/products.interface';
export declare class ProductsController {
    private readonly ProductService;
    constructor(ProductService: ProductsService);
    getProducts(): import("../interfaces/products.interface").Product[];
    getProductById(id: number): Promise<unknown>;
    getProductByPage(nr: number): Promise<unknown>;
    getProductByType(type: ProductType): Promise<unknown>;
    setProduct(ProductDto: ProductDto): Promise<unknown>;
}
