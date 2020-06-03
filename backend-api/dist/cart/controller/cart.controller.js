"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cart_service_1 = require("../service/cart.service");
const cart_dto_1 = require("../dto/cart.dto");
const cart_price_service_1 = require("../service/cart.price.service");
let CartController = class CartController {
    constructor(cartService, cartPriceService) {
        this.cartService = cartService;
        this.cartPriceService = cartPriceService;
    }
    getUserCart(user_id) {
        return this.cartService.getUserCart(user_id)
            .catch((err) => {
            console.warn(err, 'src/cart/service/cart.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    getCartPrice(currency, username) {
        return this.cartPriceService.getCartPrice(currency, username)
            .catch((err) => {
            console.warn(err, 'src/cart/service/cart.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    setNewCart(newCart) {
        return this.cartService.setNewCart(newCart)
            .catch((err) => {
            console.warn(err, 'src/cart/service/cart.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    addProduct(product_id, user_id) {
        return this.cartService.addNewProduct(product_id, user_id)
            .catch(err => {
            console.warn(err, ': src/cart/service/cart.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    removeProduct(product_id, user_id) {
        return this.cartService.removeProduct(product_id, user_id)
            .catch(err => {
            console.warn(err, 'src/cart/service/cart.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getUserCart", null);
__decorate([
    common_1.Get('price'),
    __param(0, common_1.Query('currency')),
    __param(1, common_1.Query('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getCartPrice", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.CartDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "setNewCart", null);
__decorate([
    common_1.Get('add_product/:product_id'),
    __param(0, common_1.Param('product_id', new common_1.ParseIntPipe())),
    __param(1, common_1.Query('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "addProduct", null);
__decorate([
    common_1.Delete('delete_product/:product_id'),
    __param(0, common_1.Param('product_id', new common_1.ParseIntPipe())),
    __param(1, common_1.Query('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "removeProduct", null);
CartController = __decorate([
    common_1.Controller('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService,
        cart_price_service_1.CartPriceService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map