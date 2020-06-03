import {Injectable} from '@nestjs/common';
import {products} from '../../__tests__/mock/products.mock'
import {Cart} from '../interfaces/cart';
import {Product} from '../../products/interfaces/products.interface';
import {carts} from '../../__tests__/mock/carts.mock';

@Injectable()
export class CartService {
	cart: Cart;
	newProduct: Product;

	getUserCart = (user_id: string) => new Promise((resolve, rejects) => {
		this.cart = carts.find((cart) => cart.user_id === user_id);
		if (!this.cart) rejects('username doesnt exist in our database');
		resolve(this.cart);
	});

	setNewCart = (newCart: Cart) => new Promise((resolve, rejects) => {
		if (!newCart) rejects('body req doesnt exist');
		this.cart = newCart;
		carts.push(newCart);
		resolve(this.cart);
	});
	addNewProduct = (product_id: number, user_id: string) => new Promise((resolve, rejects) => {
		this.cart = carts.find(cart => (cart.user_id === user_id));
		this.newProduct = products.find((product) => (product.id === product_id));

		if (!this.cart) rejects('error username doesnt exist in our database');
		if (!this.newProduct) rejects('error product_id without range');

		this.cart.products.push(this.newProduct);
		carts.push(this.cart);
		resolve(this.newProduct);
	});
	removeProduct = (product_id: number, user_id: string) => new Promise((resolve, rejects) => {
		this.cart = carts.find((cart) => cart.user_id === user_id);

		if (!this.cart) rejects('username doesnt exist in our database');
		if (!this.cart.products.includes(products[product_id - 1])) rejects('product_id without range');

		carts
			.find((cart) => cart.user_id === user_id).products
			.splice(product_id, 1);
		resolve(this.cart.products[product_id - 1]);
	})
}