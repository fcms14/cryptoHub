"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketHistoryService = void 0;
const common_1 = require("@nestjs/common");
let MarketHistoryService = class MarketHistoryService {
    findAll() {
    }
    async findOne(i_exchange, i_ticker, i_timeFrame, i_since, i_limit) {
        try {
            const ccxt = require('ccxt');
            if (!ccxt.exchanges.includes(i_exchange)) {
                throw { name: "Try again", message: "Exchange does not exists" };
            }
            const exchange = new ccxt.pro[i_exchange]();
            const ohlcv = await exchange.fetchOHLCV(i_ticker, i_timeFrame, i_since, i_limit);
            for (let i = 0; i < ohlcv.length; i++) {
                ohlcv[i] = [new Date(ohlcv[i][0]), ...ohlcv[i]];
            }
            return ohlcv;
        }
        catch (error) {
            return { title: error.name, message: error.message };
        }
    }
};
MarketHistoryService = __decorate([
    (0, common_1.Injectable)()
], MarketHistoryService);
exports.MarketHistoryService = MarketHistoryService;
//# sourceMappingURL=market-history.service.js.map