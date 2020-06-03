import {CartController} from './cart.controller';
import {CartService} from '../service/cart.service';
import {CartPriceService} from '../service/cart.price.service';
import {cartPriceResMock, carts} from '../../__tests__/mock/carts.mock';


describe('CartController', () => {
	let controller: CartController;
  let service: CartService;
  let priceService: CartPriceService;

	beforeEach(() => {
	  service = new CartService();
	  priceService = new CartPriceService();
		controller = new CartController(service, priceService)
	});
	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	describe('getUserCart()', () => {

	  describe('when get correct data', () => {
      it('should return any cart result',  () => {
        const result = {name: 'cart_mock'};
        jest.spyOn(service, 'getUserCart').mockImplementationOnce(() => Promise.resolve(result));
        expect(controller.getUserCart('no@home.pl')).resolves.toEqual(result);
      });
    });

    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        jest.spyOn(service, 'getUserCart').mockImplementationOnce(() => Promise.reject('username doesnt exist in our database'));
        expect(controller.getUserCart('jjjIII')).resolves.toEqual({error: "username doesnt exist in our database", statusCode: 404});
      })
    });

  });
  describe('getCartPrice()', () => {

    describe('when get correct data', () => {
      it('should return cart price entity', () => {
        jest.spyOn(priceService, 'getCartPrice').mockImplementationOnce(() => Promise.resolve(cartPriceResMock));
        expect(controller.getCartPrice('AUD', 'no@home.pl')).resolves.toEqual(cartPriceResMock);
      })
    });

    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        jest.spyOn(priceService, 'getCartPrice').mockImplementationOnce(() => Promise.reject('res query - user_id, doesnt exist'));
        expect(controller.getCartPrice('PLN', undefined)).resolves.toEqual({error: "res query - user_id, doesnt exist", statusCode: 404});
      })
    });

  });

  describe('setNewCart()', () => {

    describe('when get correct data', () => {
      it('should return cart entity', () => {
        jest.spyOn(service, 'setNewCart').mockImplementationOnce(() => Promise.resolve(carts[0]));
        expect(controller.setNewCart(carts[0])).resolves.toEqual(carts[0]);
      })
    });

    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        jest.spyOn(service, 'setNewCart').mockImplementationOnce(() => Promise.reject('body req doesnt exist'));
        expect(controller.setNewCart(carts[0])).resolves.toEqual({statusCode: 404, error: 'body req doesnt exist'});
      });
    });

  });

  describe('addProduct()', () => {

    describe('when get correct data', () => {
      it('should return added product', () => {
        let mockAddedProduct = {product: 'mock product'};
        jest.spyOn(service, 'addNewProduct').mockImplementationOnce(() => Promise.resolve(mockAddedProduct));
        expect(controller.addProduct(2, 'no@home.pl')).resolves.toEqual(mockAddedProduct);
      })
    });

    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        jest.spyOn(service, 'addNewProduct').mockImplementationOnce(() => Promise.reject('body req doesnt exist'));
        expect(controller.addProduct(2, undefined)).resolves.toEqual({statusCode: 404, error: 'body req doesnt exist'});
      });
    });

  });
  describe('removeProduct()', () => {

    describe('when get correct data', () => {
      it('should return removed product', () => {
        jest.spyOn(service, 'removeProduct').mockImplementation(() => Promise.resolve(carts[0].products[3]));
        expect(controller.removeProduct(4, 'no@home.pl')).resolves.toEqual(carts[0].products[3]);
      });
    });
    describe('when get incorrect data', () => {
      it('should return reject promise', () => {
        jest.spyOn(service, 'removeProduct').mockImplementation(() => Promise.reject('username doesnt exist in our database'));
        expect(controller.removeProduct(10000000, 'bad@worst.pl')).resolves.toEqual({statusCode: 404, error: 'username doesnt exist in our database'});
      });
    });

  });
});
