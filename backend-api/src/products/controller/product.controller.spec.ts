import {ProductsController} from './products.controller';
import {ProductsService} from '../service/products.service';
import {products} from '../../__tests__/mock/products.mock';
import {ProductType} from '../interfaces/products.interface';

describe('Product Controller', () => {
	let controller: ProductsController;
	let service: ProductsService;

	beforeEach(async () => {

		service = new ProductsService();
		controller = new ProductsController(service)
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	describe('getAllProduct()', () => {

		describe('when get correct data', () => {
			it('should return all product', () => {
				jest.spyOn(service, 'getAllProducts').mockImplementation(() => products);
				expect(controller.getAllProducts()).toEqual(products);
			});
		});
	});

	describe('getProductById()', () => {

		describe('when get correct data', () => {
			it('should return correct product', () => {
				jest.spyOn(service, 'getProductById').mockImplementation(() => Promise.resolve(products[3]));
				expect(controller.getProductById(4)).resolves.toEqual(products[3])
			});
		});
		describe('when get incorrect data', () => {
			it('should return reject promise', () => {
				jest.spyOn(service, 'getProductById').mockImplementation(() => Promise.reject('id out of range'));
				expect(controller.getProductById(100000)).rejects.toEqual({statusCode: 404, error: 'id out of range'});
			});
		});
	});

	describe('getProductByPage()', () => {

	  describe('when get correct data', () => {
		  it('should return promise fulfilled correct products',  () => {
		  	const firstPageOfProducts = products.filter((product, index) => (index < 5));
			  jest.spyOn(service, 'getProductByPage').mockImplementation(() => Promise.resolve(firstPageOfProducts));
			  expect(controller.getProductByPage(1)).resolves.toEqual(firstPageOfProducts);
		  });
	  });
	  describe('when get incorrect data', () => {
		  it('should return reject promise', function () {
			  jest.spyOn(service, 'getProductByPage').mockImplementation(() => Promise.reject('page out of range'));
			  expect(controller.getProductByPage(10000)).rejects.toEqual({ error: "page out of range", statusCode: 404 });
		  });
	  })
  });

	describe('getProductByType()', () => {

		describe('when get correct data', () => {
			it('should return promise fulfilled with correct type products',  () => {
				const productFilterByLampsType = products.filter(product => (product.type === ProductType.lamps));
				jest.spyOn(service, 'getProductByType').mockImplementation(() => Promise.resolve(productFilterByLampsType));
				expect(controller.getProductByType(ProductType.lamps)).resolves.toEqual(productFilterByLampsType);
			});
		});
		describe('when get incorrect data', () => {
			it('should return reject promise',  () => {
				jest.spyOn(service, 'getProductByType').mockImplementation(() => Promise.reject('type is out of range'));
				expect(controller.getProductByType(undefined)).rejects.toEqual({ statusCode: 404, error: 'type is out of range' });
			});
		})
	});

	describe('setProduct()', () => {

		describe('when get correct data', () => {
			it('should return promise fulfilled with new product',  () => {
				jest.spyOn(service, 'addProduct').mockImplementation(() => Promise.resolve(products[5]));
				expect(controller.setProduct(products[5])).resolves.toEqual(products[5]);
			});
		});
		describe('when get incorrect data', () => {
			it('should return reject promise',  () => {
				jest.spyOn(service, 'addProduct').mockImplementation(() => Promise.reject('invalid product'));
				expect(controller.setProduct(undefined)).rejects.toEqual({ statusCode: 404, error: 'invalid product' });
			});
		})
	})
});
