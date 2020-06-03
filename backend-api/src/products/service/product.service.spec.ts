import {Test, TestingModule} from '@nestjs/testing';
import {ProductsService} from './products.service';
import {products} from '../../__tests__/mock/products.mock';
import {ProductType} from '../interfaces/products.interface';

describe('ProductService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllProducts()', () => {

    describe('when get correct data', () => {
      it('should return correct products array', () => {
        expect(service.getAllProducts()).toEqual(products)
      });
    });

  });

  describe('getProductById()', () => {
    describe('when get correct data', () => {
      it('should return fulfilled promise with correct product', () => {
        expect(service.getProductById(3)).resolves.toEqual(products[2]);
      });
    });
    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        expect(service.getProductById(10000000)).rejects.toEqual('id out of range');
      });
    });

  });

  describe('getProductByType()', () => {
    const productFurniture = products.filter(product => product.type === ProductType.furniture);

    describe('when get correct data', () => {
      it('should return fulfilled promise with correct product', () => {
        expect(service.getProductByType(ProductType.furniture)).resolves.toEqual(productFurniture);
      });
    });
    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        expect(service.getProductByType(undefined)).rejects.toEqual('type is out of range');
      });
    });

  });

  describe('getProductByPage()', () => {

    describe('when get correct data', () => {
      it('should return promise fulfilled with correct products', () => {
        const productsFromFirstPage = products.filter((product, index) => (index < 5));
        expect(service.getProductByPage(1)).resolves.toEqual(productsFromFirstPage);
      });
    });
    describe('when get incorrect data', () => {
      it('should return promise reject', () => {
        expect(service.getProductByPage(11)).rejects.toEqual('page out of range');
      });
    });

  });

  describe('addProduct()', () => {

    describe('when get correct data', () => {
      it('should return promise fulfilled with new product', () => {
        expect(service.addProduct(products[4])).resolves.toEqual(products[4]);
      });
    });
    describe('when get incorrect data', () => {
      it('should return promise reject', () => {
        expect(service.addProduct(undefined)).rejects.toEqual('invalid product');
      });
    });

  })
});
