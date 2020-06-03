import {Module} from '@nestjs/common';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {SignUpModule} from './sign-up/sign-up.module';

@Module({
  imports: [
    ProductsModule,
    CartModule,
		SignUpModule,
  ],
})
export class AppModule {
}
