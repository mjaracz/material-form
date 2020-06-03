"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_fastify_1 = require("@nestjs/platform-fastify");
const helmet = require("fastify-helmet");
const fastifyAdapterRegister = new platform_fastify_1.FastifyAdapter();
fastifyAdapterRegister.register(helmet, { hidePoweredBy: { setTo: 'PHP 4.2.0' } });
exports.default = fastifyAdapterRegister;
//# sourceMappingURL=fastify.register.js.map