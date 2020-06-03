import {Injectable} from '@nestjs/common';
import {products} from '../../__tests__/mock/products.mock';
import {Product, ProductType} from '../interfaces/products.interface';

@Injectable()
export class ProductsService {
	getAllProducts(): Product[] {
		return products
	}
	getProductById = (id: number) => new Promise((resolve, reject) => {
		if (id >= products.length) reject('id out of range');
		resolve(products[id - 1]);
	});

	getProductByType = (type: ProductType) => new Promise((resolve, reject) => {
		const productByType = products.filter((item) => (item.type === type));
		if (!productByType.length) reject('type is out of range');
		else resolve(productByType);
	});


	getProductByPage = (page: number) => new Promise((resolve, reject) => {
		const endOfProductRang = page * 5;
		const startOfProductRang = (page - 1) * 5;

		if (page * 5 > products.length) reject('page out of range');
		resolve(products.filter(product => (product.id >= startOfProductRang && product.id <= endOfProductRang)));
	});

	addProduct = (product: Product) => new Promise((resolve, reject) => {
		if (!product) reject('invalid product');
		products.push(product);
		resolve(product);
	});
}
