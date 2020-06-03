import {Cart} from '../../cart/interfaces/cart';
import {Currency} from '../../common/types/currency.enum';
import {ProductType} from '../../products/interfaces/products.interface';
import {CartResponse} from "../../cart/interfaces/cart.response";

export const carts: Cart[] = [
	{
		user_id: 'no@home.pl',
		cart_id: '0-no@home.pl',
		cart_currency: Currency.PLN,
		cart_price: 2350,
		date_time: new Date(),
		products: [
			{
				id: 1,
				name: 'sofa',
				price: 1200,
				quantity: 200,
				description: 'We have perfect blue furniture in magazine',
				currency: Currency.PLN,
				type: ProductType.furniture
			},
			{
				id: 2,
				name: ' dresser',
				price: 800,
				quantity: 20,
				currency: Currency.PLN,
				type: ProductType.furniture
			},
			{
				id: 3,
				name: 'chair',
				price: 350,
				quantity: 20,
				description: 'Chairs, unlimited edition',
				currency: Currency.PLN,
				type: ProductType.furniture
			}
		]
	},
	{
		user_id: 'ewelin@home.pl',
		cart_id: '1-ewelin@home.pl',
		cart_currency: Currency.PLN,
		cart_price: 2350,
		date_time: new Date(),
		products: [
			{
				id: 1,
				name: 'sofa',
				price: 1200,
				quantity: 200,
				description: 'We have perfect blue furniture in magazine',
				currency: Currency.PLN,
				type: ProductType.furniture
			},
			{
				id: 2,
				name: ' dresser',
				price: 800,
				quantity: 20,
				currency: Currency.PLN,
				type: ProductType.furniture
			},
			{
				id: 3,
				name: 'chair',
				price: 350,
				quantity: 20,
				description: 'Chairs, unlimited edition',
				currency: Currency.PLN,
				type: ProductType.furniture
			}
		]
	},
	{
		user_id: 'ekmortin@home.pl',
		cart_id: '2-ekmortin@home.pl',
		cart_currency: Currency.PLN,
		cart_price: 2350,
		date_time: new Date(),
		products: [
			{
				id: 6,
				name: 'dresser_yellow',
				price: 800,
				quantity: 20,
				currency: Currency.PLN,
				type: ProductType.furniture
			},
			{
				id: 7,
				name: 'old_wood_chair',
				price: 350,
				quantity: 20,
				description: 'Chairs, unlimited wood edition',
				currency: Currency.PLN,
				type: ProductType.furniture
			},
			{
				id: 8,
				name: 'sofa_pillow',
				price: 30,
				quantity: 300,
				currency: Currency.PLN,
				type: ProductType.additional
			},
			{
				id: 9,
				name: 'lamps_blue',
				price: 20,
				quantity: 250,
				currency: Currency.PLN,
				type: ProductType.lamps
			}
		]
	}
];

export const cartResMock: CartResponse = {
	username: 'no@home.pl',
	cart_id: '0-no@home.pl',
	total_cart_price: 2350
};

export const cartPriceResMock = {
	"cart_id": "0-no@home.pl",
	"username": "no@home.pl",
	"total_cart_price": 903
};