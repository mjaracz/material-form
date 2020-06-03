import { CartService } from '../service/cart.service';
import { CartDto } from '../dto/cart.dto';
import { Currency } from '../../common/types/currency.enum';
import { CartPriceService } from '../service/cart.price.service';
export declare class CartController {
    private readonly cartService;
    private readonly cartPriceService;
    constructor(cartService: CartService, cartPriceService: CartPriceService);
    getUserCart(user_id: string): Promise<unknown>;
    getCartPrice(currency: Currency | string, username: string): Promise<unknown>;
    setNewCart(newCart: CartDto): Promise<unknown>;
    addProduct(product_id: number, user_id: string): Promise<unknown>;
    removeProduct(product_id: number, user_id: string): Promise<unknown>;
}
