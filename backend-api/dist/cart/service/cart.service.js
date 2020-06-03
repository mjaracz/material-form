"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const products_mock_1 = require("../../__tests__/mock/products.mock");
const carts_mock_1 = require("../../__tests__/mock/carts.mock");
let CartService = class CartService {
    constructor() {
        this.getUserCart = (user_id) => new Promise((resolve, rejects) => {
            this.cart = carts_mock_1.carts.find((cart) => cart.user_id === user_id);
            if (!this.cart)
                rejects('username doesnt exist in our database');
            resolve(this.cart);
        });
        this.setNewCart = (newCart) => new Promise((resolve, rejects) => {
            if (!newCart)
                rejects('body req doesnt exist');
            this.cart = newCart;
            carts_mock_1.carts.push(newCart);
            resolve(this.cart);
        });
        this.addNewProduct = (product_id, user_id) => new Promise((resolve, rejects) => {
            this.cart = carts_mock_1.carts.find(cart => (cart.user_id === user_id));
            this.newProduct = products_mock_1.products.find((product) => (product.id === product_id));
            if (!this.cart)
                rejects('error username doesnt exist in our database');
            if (!this.newProduct)
                rejects('error product_id without range');
            this.cart.products.push(this.newProduct);
            carts_mock_1.carts.push(this.cart);
            resolve(this.newProduct);
        });
        this.removeProduct = (product_id, user_id) => new Promise((resolve, rejects) => {
            this.cart = carts_mock_1.carts.find((cart) => cart.user_id === user_id);
            if (!this.cart)
                rejects('username doesnt exist in our database');
            if (!this.cart.products.includes(products_mock_1.products[product_id - 1]))
                rejects('product_id without range');
            carts_mock_1.carts
                .find((cart) => cart.user_id === user_id).products
                .splice(product_id, 1);
            resolve(this.cart.products[product_id - 1]);
        });
    }
};
CartService = __decorate([
    common_1.Injectable()
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map