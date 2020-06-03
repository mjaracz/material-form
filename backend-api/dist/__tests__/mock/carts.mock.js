"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartPriceResMock = exports.cartResMock = exports.carts = void 0;
const currency_enum_1 = require("../../common/types/currency.enum");
const products_interface_1 = require("../../products/interfaces/products.interface");
exports.carts = [
    {
        user_id: 'no@home.pl',
        cart_id: '0-no@home.pl',
        cart_currency: currency_enum_1.Currency.PLN,
        cart_price: 2350,
        date_time: new Date(),
        products: [
            {
                id: 1,
                name: 'sofa',
                price: 1200,
                quantity: 200,
                description: 'We have perfect blue furniture in magazine',
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            },
            {
                id: 2,
                name: ' dresser',
                price: 800,
                quantity: 20,
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            },
            {
                id: 3,
                name: 'chair',
                price: 350,
                quantity: 20,
                description: 'Chairs, unlimited edition',
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            }
        ]
    },
    {
        user_id: 'ewelin@home.pl',
        cart_id: '1-ewelin@home.pl',
        cart_currency: currency_enum_1.Currency.PLN,
        cart_price: 2350,
        date_time: new Date(),
        products: [
            {
                id: 1,
                name: 'sofa',
                price: 1200,
                quantity: 200,
                description: 'We have perfect blue furniture in magazine',
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            },
            {
                id: 2,
                name: ' dresser',
                price: 800,
                quantity: 20,
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            },
            {
                id: 3,
                name: 'chair',
                price: 350,
                quantity: 20,
                description: 'Chairs, unlimited edition',
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            }
        ]
    },
    {
        user_id: 'ekmortin@home.pl',
        cart_id: '2-ekmortin@home.pl',
        cart_currency: currency_enum_1.Currency.PLN,
        cart_price: 2350,
        date_time: new Date(),
        products: [
            {
                id: 6,
                name: 'dresser_yellow',
                price: 800,
                quantity: 20,
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            },
            {
                id: 7,
                name: 'old_wood_chair',
                price: 350,
                quantity: 20,
                description: 'Chairs, unlimited wood edition',
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.furniture
            },
            {
                id: 8,
                name: 'sofa_pillow',
                price: 30,
                quantity: 300,
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.additional
            },
            {
                id: 9,
                name: 'lamps_blue',
                price: 20,
                quantity: 250,
                currency: currency_enum_1.Currency.PLN,
                type: products_interface_1.ProductType.lamps
            }
        ]
    }
];
exports.cartResMock = {
    username: 'no@home.pl',
    cart_id: '0-no@home.pl',
    total_cart_price: 2350
};
exports.cartPriceResMock = {
    "cart_id": "0-no@home.pl",
    "username": "no@home.pl",
    "total_cart_price": 903
};
//# sourceMappingURL=carts.mock.js.map