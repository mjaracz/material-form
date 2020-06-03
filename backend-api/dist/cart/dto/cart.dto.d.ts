import { Currency } from "../../common/types/currency.enum";
import { Product } from "../../products/interfaces/products.interface";
export declare class CartDto {
    readonly user_id: string;
    readonly cart_id: string;
    readonly date_time: Date;
    readonly cart_currency: Currency | string;
    readonly cart_price?: number;
    readonly products: Product[];
}
