import {IsString, IsInt, IsOptional} from 'class-validator'
import {ProductType} from "../interfaces/products.interface";
import {Currency} from "../../common/types/currency.enum";

export class ProductDto {
	@IsInt()
	readonly id: number;

	@IsString()
	readonly name: string;

	@IsInt()
	readonly price: number;

	@IsInt()
	readonly quantity: number;

	@IsString()
	@IsOptional()
	readonly currency?: Currency;

	@IsString()
	@IsOptional()
	readonly  description?: string;

	@IsString()
	readonly type: ProductType;
}