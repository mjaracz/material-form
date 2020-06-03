import { ProductType } from "../interfaces/products.interface";
import { Currency } from "../../common/types/currency.enum";
export declare class ProductDto {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly currency?: Currency;
    readonly description?: string;
    readonly type: ProductType;
}
