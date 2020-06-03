import {Injectable} from '@nestjs/common';
import {Currency} from '../../common/types/currency.enum';
import {carts} from '../../__tests__/mock/carts.mock';
import * as fetchModule from 'node-fetch';
import {CartResponse} from '../interfaces/cart.response';
import {Cart} from '../interfaces/cart';

@Injectable()
export class CartPriceService {
	private rateOfExchangeUser = 0;
	private rateOfExchangePLN = 0;
	private price = 0;
	private cart: Cart;
	private cartRes: CartResponse;

	getCartPrice = (currency: Currency | string, username: string) => new Promise(async (resolves, rejects) => {
		username
			? this.cart = carts.find((cart) => (cart.user_id === username))
			: rejects('res query - user_id, doesnt exist');

		if (!this.cart) rejects('username without db range');
		if (!currency) rejects('res query - currency, doesnt exist');
		if (currency !== this.cart.cart_currency)
			await fetchModule('https://api.exchangeratesapi.io/latest')
				.then(res => res.json())
				.then(data => {
					this.rateOfExchangePLN = data.rates['PLN'];
					this.rateOfExchangeUser = data.rates[currency];
				})
				.catch(err => rejects(err));

		this.cart
			.products
			.forEach((item) => this.price += item.price);

		if (this.rateOfExchangePLN !== this.rateOfExchangeUser)
			this.price = Math.floor((this.price / this.rateOfExchangePLN) * this.rateOfExchangeUser);

		this.cartRes = {
			cart_id: this.cart.cart_id,
			username: this.cart.user_id,
			total_cart_price: this.price
		};
		resolves(this.cartRes);
		this.price = 0;
	});

}