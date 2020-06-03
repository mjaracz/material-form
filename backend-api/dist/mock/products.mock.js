"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const products_interface_1 = require("../products/interfaces/products.interface");
const currency_enum_1 = require("../common/types/currency.enum");
exports.products = [
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
    },
    {
        id: 4,
        name: 'pillow',
        price: 30,
        quantity: 300,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.additional
    },
    {
        id: 5,
        name: 'sofa red',
        price: 1200,
        quantity: 200,
        description: 'We have perfect red furniture in magazine',
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.furniture
    },
    {
        id: 6,
        name: 'dresser yellow',
        price: 800,
        quantity: 20,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.furniture
    },
    {
        id: 7,
        name: 'old wood chair',
        price: 350,
        quantity: 20,
        description: 'Chairs, unlimited wood edition',
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.furniture
    },
    {
        id: 8,
        name: 'sofa pillow',
        price: 30,
        quantity: 300,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.additional
    },
    {
        id: 9,
        name: 'lamps blue',
        price: 20,
        quantity: 250,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.lamps
    },
    {
        id: 10,
        name: 'lamps yellow',
        price: 25,
        quantity: 250,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.lamps
    },
    {
        id: 11,
        name: 'lamps red',
        price: 30,
        quantity: 250,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.lamps
    },
    {
        id: 12,
        name: 'lamps green',
        price: 15,
        quantity: 250,
        currency: currency_enum_1.Currency.PLN,
        type: products_interface_1.ProductType.lamps
    }
];
//# sourceMappingURL=products.mock.js.map