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
let ProductsService = class ProductsService {
    constructor() {
        this.getProductById = (id) => new Promise((resolve, reject) => {
            if (id >= products_mock_1.products.length)
                reject('id out of range');
            resolve(products_mock_1.products[id - 1]);
        });
        this.getProductByType = (type) => new Promise((resolve, reject) => {
            const productByType = products_mock_1.products.filter((item) => (item.type === type));
            if (!productByType.length)
                reject('type is out of range');
            else
                resolve(productByType);
        });
        this.getProductByPage = (page) => new Promise((resolve, reject) => {
            const endOfProductRang = page * 5;
            const startOfProductRang = (page - 1) * 5;
            if (page * 5 > products_mock_1.products.length)
                reject('page out of range');
            resolve(products_mock_1.products.filter(product => (product.id >= startOfProductRang && product.id <= endOfProductRang)));
        });
        this.addProduct = (product) => new Promise((resolve, reject) => {
            if (!product)
                reject('invalid product');
            products_mock_1.products.push(product);
            resolve(product);
        });
    }
    getAllProducts() {
        return products_mock_1.products;
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map