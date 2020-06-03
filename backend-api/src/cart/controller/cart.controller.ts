import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query} from '@nestjs/common';
import {CartService} from '../service/cart.service';
import {CartDto} from '../dto/cart.dto';
import {Currency} from '../../common/types/currency.enum';
import {CartPriceService} from '../service/cart.price.service';

@Controller('cart')
export class CartController {
	constructor(
		private readonly cartService: CartService,
		private readonly cartPriceService: CartPriceService
	) {
	}

	@Get()
	getUserCart(@Query('username') user_id: string) {
		return this.cartService.getUserCart(user_id)
			.catch((err) => {
				console.warn(err, 'src/cart/service/cart.service.ts');
				return {
					statusCode: 404,
					error: err
				};
			});
	}

	@Get('price')
	getCartPrice(
		@Query('currency') currency: Currency | string,
		@Query('username') username: string
	) {
		return this.cartPriceService.getCartPrice(currency, username)
			.catch((err) => {
				console.warn(err, 'src/cart/service/cart.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}


	@Post('create')
	setNewCart(@Body() newCart: CartDto) {
		return this.cartService.setNewCart(newCart)
			.catch((err) => {
				console.warn(err, 'src/cart/service/cart.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}

	@Get('add_product/:product_id')
	addProduct(
		@Param('product_id', new ParseIntPipe()) product_id: number,
		@Query('username') user_id: string
	) {
		return this.cartService.addNewProduct(product_id, user_id)
			.catch(err => {
				console.warn(err, ': src/cart/service/cart.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}

	@Delete('delete_product/:product_id')
	removeProduct(
		@Param('product_id', new ParseIntPipe()) product_id: number,
		@Query('username') user_id: string
	) {
		return this.cartService.removeProduct(product_id, user_id)
			.catch(err => {
				console.warn(err, 'src/cart/service/cart.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}
}
