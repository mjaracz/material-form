import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {ProductsService} from '../service/products.service'
import {ProductDto} from '../dto/product.dto'
import {ProductType} from '../interfaces/products.interface';

@Controller('products')
export class ProductsController {
	constructor(
		private readonly ProductService: ProductsService
	) {}

	@Get('')
	getProducts() {
		return this.ProductService.getAllProducts()
	}


	@Get(':id')
	getProductById(@Param('id', new ParseIntPipe()) id: number,) {
		return this.ProductService.getProductById(id)
			.catch(err => {
				console.warn(err, 'src/products/service/products.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}

	@Get('page/:nr')
	getProductByPage(@Param('nr', new ParseIntPipe()) nr: number) {
		return this.ProductService.getProductByPage(nr)
			.catch(err => {
				console.warn(err, 'src/products/service/products.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}

	@Get('types/:types')
	getProductByType(@Param('type') type: ProductType) {
		return this.ProductService.getProductByType(type)
			.catch(err => {
				console.warn(err, 'src/products/service/products.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}

	@Post('create')
	async setProduct(@Body() ProductDto: ProductDto) {
		return this.ProductService.addProduct(ProductDto)
			.catch(err => {
				console.warn(err, 'src/products/service/products.service.ts');
				return {
					statusCode: 404,
					error: err
				}
			})
	}
}
