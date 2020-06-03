import {Currency} from "../../common/types/currency.enum";

export interface Product {
	id: number;
	name: string;
	price: number;
	quantity: number;
	currency?: Currency;
	description?: string;
	type: ProductType
}

export enum ProductType {
	furniture = 'furniture',
  additional = 'additional',
	lamps = 'lamps'
}