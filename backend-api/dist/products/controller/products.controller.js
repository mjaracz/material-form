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
const products_service_1 = require("../service/products.service");
const product_dto_1 = require("../dto/product.dto");
const products_interface_1 = require("../interfaces/products.interface");
let ProductsController = class ProductsController {
    constructor(ProductService) {
        this.ProductService = ProductService;
    }
    getProducts() {
        return this.ProductService.getAllProducts();
    }
    getProductById(id) {
        return this.ProductService.getProductById(id)
            .catch(err => {
            console.warn(err, 'src/products/service/products.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    getProductByPage(nr) {
        return this.ProductService.getProductByPage(nr)
            .catch(err => {
            console.warn(err, 'src/products/service/products.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    getProductByType(type) {
        return this.ProductService.getProductByType(type)
            .catch(err => {
            console.warn(err, 'src/products/service/products.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
    async setProduct(ProductDto) {
        return this.ProductService.addProduct(ProductDto)
            .catch(err => {
            console.warn(err, 'src/products/service/products.service.ts');
            return {
                statusCode: 404,
                error: err
            };
        });
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductById", null);
__decorate([
    common_1.Get('page/:nr'),
    __param(0, common_1.Param('nr', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductByPage", null);
__decorate([
    common_1.Get('types/:types'),
    __param(0, common_1.Param('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductByType", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "setProduct", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map