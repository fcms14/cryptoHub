"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMarketHistoryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_market_history_dto_1 = require("./create-market-history.dto");
class UpdateMarketHistoryDto extends (0, swagger_1.PartialType)(create_market_history_dto_1.CreateMarketHistoryDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateMarketHistoryDto = UpdateMarketHistoryDto;
//# sourceMappingURL=update-market-history.dto.js.map