import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import {carts} from '../../__tests__/mock/carts.mock';
import {products} from '../../__tests__/mock/products.mock';


describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [CartService],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUserCart()', () => {
    describe('When get correct data, promise', () => {
      it('should fulfilled with the correct data', () => {
        service
          .getUserCart('ewelin@home.pl')
          .then(res => expect(res).toEqual(carts[2]))
          .catch(err => err)
      })
    });
    describe('When get incorrect data, promise', () => {
      it('should reject with expected reason message', () => {
        service
          .getUserCart('bad_email@bad_webside.com')
          .catch(err => expect(err).toEqual('username doesnt exist in our database'))
      })
    })
  });

  describe('setNewCart()', () => {
    describe('When get correct data', () => {
      it('should push new data to carts array', () => {
        service.setNewCart(carts[3]);
        expect(carts).toHaveLength(4)
      });
    });
    describe('When get incorrect data', () => {
      it('should returned promise reject with error message', () => {
        service
          .setNewCart(null)
          .then(err => expect(err).toEqual('body req doesnt exist'))
      });
    });
  });

  describe('addNewProduct()', () => {
    describe('When get correct data', () => {
      it('should add product to the cart products array', () => {
        service.addNewProduct(2, 'ewelin@home.pl');
        expect(service.cart.products).toHaveLength(4);
      });
      it('should returned fulfilled promise, with correct data product', () => {
        service
          .addNewProduct(2, 'ewelin@home.pl')
          .then(res => expect(res).toEqual(products[1]))
      });
    });
    describe('When get incorrect data', () => {
      it('should returned reject promise, with correct reason message', () => {
        expect(service.addNewProduct(1000000, null)).rejects.toBeTruthy();
      });
    });
  });

  describe('removeProduct()', () => {
    describe('When get correct data', () => {
      let lengthBeforeRemove: number;
      beforeEach(() => {
        lengthBeforeRemove = carts[0].products.length;
      });
      it('should remove product in cart, and return removed product', () => {
        service
          .removeProduct(2, 'no@home.pl')
          .then(res => expect(res).toEqual(service.cart.products[1]));
        expect(carts[0].products).toHaveLength(lengthBeforeRemove - 1);
      })
    });
    describe('When get incorrect data', () => {
      it('should return reject promise ', () => {
        expect(service.removeProduct(4, 'no@home.pl')).rejects.toMatch('product_id without range');
        expect(service.removeProduct(3, 'bad@worst.com')).rejects.toMatch('username doesnt exist in our database');
      })
    });
  })
});
