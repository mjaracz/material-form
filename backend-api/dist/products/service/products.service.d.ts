import { Product, ProductType } from '../interfaces/products.interface';
export declare class ProductsService {
    getAllProducts(): Product[];
    getProductById: (id: number) => Promise<unknown>;
    getProductByType: (type: ProductType) => Promise<unknown>;
    getProductByPage: (page: number) => Promise<unknown>;
    addProduct: (product: Product) => Promise<unknown>;
}
