"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const fastify_register_1 = require("./common/helmet/fastify.register");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, fastify_register_1.default, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map