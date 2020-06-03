import { Product } from "../../products/interfaces/products.interface";
import { Currency } from "../../common/types/currency.enum";
export interface Cart {
    user_id: string;
    cart_id: string;
    date_time: Date;
    cart_currency: Currency | string;
    cart_price?: number;
    products: Product[];
}
