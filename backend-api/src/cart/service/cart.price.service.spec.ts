import {CartPriceService} from './cart.price.service';
import {Test, TestingModule} from '@nestjs/testing';
import {cartPriceResMock, cartResMock} from '../../__tests__/mock/carts.mock';
import {currencyResponseMock} from '../../__tests__/mock/currency.mock';
import * as fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());

describe('CartPriceService', () => {
	let service: CartPriceService;

	beforeEach( async() => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CartPriceService],
		}).compile();
		service = module.get<CartPriceService>(CartPriceService);
	});

	describe('getCartPrice()', () => {
		describe('when get correct data', () => {

			describe('and query currency is PLN', () => {
				it('should return correct fulfilled promise', () => {
					expect(service.getCartPrice('PLN', 'no@home.pl')).resolves.toEqual(cartResMock)
				})
			});
			describe('and currency is different than PLN', () => {
				it('should calculate price compare to Api currency value', () => {
					fetch.mockImplementation(() => Promise.resolve({
						json: () => currencyResponseMock
					}));
					service.getCartPrice('AUD', 'no@home.pl');
					expect(fetch).toHaveBeenCalled();
				});
				it('should return correct fulfilled promise', () => {
					expect(service.getCartPrice('AUD', 'no@home.pl')).resolves.toEqual(cartPriceResMock)
				});
			});
		});

		describe('when get incorrect data', () => {
			it('should return reject promise', () => {
				expect(service.getCartPrice('DWASD', 'bad@worst.pl')).rejects.toEqual('username without db range');
				expect(service.getCartPrice(undefined, 'no@home.pl')).rejects.toEqual('res query - currency, doesnt exist');
				expect(service.getCartPrice('PLN', undefined)).rejects.toEqual('res query - user_id, doesnt exist')
			})
		})
	})
});