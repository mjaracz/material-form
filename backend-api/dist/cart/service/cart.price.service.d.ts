import { Currency } from '../../common/types/currency.enum';
export declare class CartPriceService {
    private rateOfExchangeUser;
    private rateOfExchangePLN;
    private price;
    private cart;
    private cartRes;
    getCartPrice: (currency: string | Currency, username: string) => Promise<unknown>;
}
