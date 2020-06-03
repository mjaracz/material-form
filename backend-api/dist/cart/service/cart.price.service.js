"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const carts_mock_1 = require("../../__tests__/mock/carts.mock");
const fetchModule = require("node-fetch");
let CartPriceService = class CartPriceService {
    constructor() {
        this.rateOfExchangeUser = 0;
        this.rateOfExchangePLN = 0;
        this.price = 0;
        this.getCartPrice = (currency, username) => new Promise(async (resolves, rejects) => {
            username
                ? this.cart = carts_mock_1.carts.find((cart) => (cart.user_id === username))
                : rejects('res query - user_id, doesnt exist');
            if (!this.cart)
                rejects('username without db range');
            if (!currency)
                rejects('res query - currency, doesnt exist');
            if (currency !== this.cart.cart_currency)
                await fetchModule('https://api.exchangeratesapi.io/latest')
                    .then(res => res.json())
                    .then(data => {
                    this.rateOfExchangePLN = data.rates['PLN'];
                    this.rateOfExchangeUser = data.rates[currency];
                })
                    .catch(err => rejects(err));
            this.cart
                .products
                .forEach((item) => this.price += item.price);
            if (this.rateOfExchangePLN !== this.rateOfExchangeUser)
                this.price = Math.floor((this.price / this.rateOfExchangePLN) * this.rateOfExchangeUser);
            this.cartRes = {
                cart_id: this.cart.cart_id,
                username: this.cart.user_id,
                total_cart_price: this.price
            };
            resolves(this.cartRes);
            this.price = 0;
        });
    }
};
CartPriceService = __decorate([
    common_1.Injectable()
], CartPriceService);
exports.CartPriceService = CartPriceService;
//# sourceMappingURL=cart.price.service.js.map