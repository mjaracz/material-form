import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestFastifyApplication,} from '@nestjs/platform-fastify';
import {ValidationPipe} from '@nestjs/common';

import fastifyAdapterRegister from './common/helmet/fastify.register';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		fastifyAdapterRegister,
		{ cors: true }
	);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(8080);
}

bootstrap();
