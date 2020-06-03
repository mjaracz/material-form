import {Module} from '@nestjs/common';
import {CartService} from './service/cart.service';
import {CartController} from './controller/cart.controller';
import {CartPriceService} from "./service/cart.price.service";

@Module({
	controllers: [CartController],
	providers: [
		CartService,
		CartPriceService
	]
})
export class CartModule {}
