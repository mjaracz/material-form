import {IsArray, IsDate, IsEnum, IsNumber, IsOptional, IsString} from "class-validator";
import {Currency} from "../../common/types/currency.enum";
import {Product} from "../../products/interfaces/products.interface";

export class CartDto {
	@IsString()
	readonly user_id: string;

	@IsString()
	readonly cart_id: string;

	@IsDate()
	readonly date_time: Date;

	@IsEnum(Currency)
	@IsString()
	readonly cart_currency: Currency | string;

	@IsNumber()
	@IsOptional()
	readonly cart_price?: number;

	@IsArray()
	readonly products: Product[]
}