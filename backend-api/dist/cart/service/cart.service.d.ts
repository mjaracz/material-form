import { Cart } from '../interfaces/cart';
import { Product } from '../../products/interfaces/products.interface';
export declare class CartService {
    cart: Cart;
    newProduct: Product;
    getUserCart: (user_id: string) => Promise<unknown>;
    setNewCart: (newCart: Cart) => Promise<unknown>;
    addNewProduct: (product_id: number, user_id: string) => Promise<unknown>;
    removeProduct: (product_id: number, user_id: string) => Promise<unknown>;
}
