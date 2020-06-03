import {FastifyAdapter} from "@nestjs/platform-fastify";
import * as helmet from 'fastify-helmet';

const fastifyAdapterRegister = new FastifyAdapter();

fastifyAdapterRegister.register(
	helmet,
	{ hidePoweredBy: { setTo: 'PHP 4.2.0' } }
);

export default fastifyAdapterRegister;
