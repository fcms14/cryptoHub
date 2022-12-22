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
exports.MarketHistoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const market_history_service_1 = require("./market-history.service");
const swagger_1 = require("@nestjs/swagger");
let MarketHistoryController = class MarketHistoryController {
    constructor(marketHistoryService) {
        this.marketHistoryService = marketHistoryService;
    }
    async findOne(i_exchange, i_ticker, i_timeFrame, i_since, i_limit) {
        try {
            const response = await this.marketHistoryService.findOne(i_exchange.toLowerCase(), i_ticker.toUpperCase(), i_timeFrame, i_since ? Number(i_since) : undefined, i_limit ? Number(i_limit) : undefined);
            if (response.status) {
                throw ({ status: response.status, name: response.name, message: response.message });
            }
            return response;
        }
        catch (error) {
            throw new common_1.HttpException({ status: error.status || common_1.HttpStatus.NOT_FOUND, name: error.name, message: error.message }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    openapi.ApiOperation({ description: "" }),
    (0, swagger_1.ApiParam)({
        name: "i_exchange",
        enum: require('ccxt').exchanges,
        description: `Required to select the ticker on exchange`,
    }),
    (0, swagger_1.ApiParam)({
        name: 'i_ticker',
        example: 'XBTUSD',
        description: `Required to select the ticker on exchange`,
    }),
    (0, swagger_1.ApiParam)({
        name: 'i_timeFrame',
        enum: ['1m', '5m', '15m', '30m', '60m', '1h', '2h', '3h', '4h', '6h', '12h', '24h', '1d', '7d', '1w', '1M'],
        description: `Required to query the market history`,
    }),
    (0, swagger_1.ApiQuery)({
        name: "i_since",
        example: 1585267200000,
        description: "Used to query the market history since that date",
        required: false,
        type: Number
    }),
    (0, swagger_1.ApiQuery)({
        name: "i_limit",
        example: 1,
        description: "Used to query the market history at the defined limit",
        required: false,
        type: Number
    }),
    (0, common_1.Get)(':i_exchange/:i_ticker/:i_timeFrame'),
    (0, swagger_1.ApiOkResponse)({ description: 'Market History', type: Array, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('i_exchange')),
    __param(1, (0, common_1.Param)('i_ticker')),
    __param(2, (0, common_1.Param)('i_timeFrame')),
    __param(3, (0, common_1.Query)('i_since')),
    __param(4, (0, common_1.Query)('i_limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number,
        Number]),
    __metadata("design:returntype", Promise)
], MarketHistoryController.prototype, "findOne", null);
MarketHistoryController = __decorate([
    (0, swagger_1.ApiTags)('marketHistory'),
    (0, common_1.Controller)('market-history'),
    __metadata("design:paramtypes", [market_history_service_1.MarketHistoryService])
], MarketHistoryController);
exports.MarketHistoryController = MarketHistoryController;
//# sourceMappingURL=market-history.controller.js.map