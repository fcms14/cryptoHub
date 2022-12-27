import { MarketHistoryService } from './market-history.service';
export declare class MarketHistoryController {
    private readonly marketHistoryService;
    constructor(marketHistoryService: MarketHistoryService);
    listExchanges(): any;
    listTickers(i_exchange: string): Promise<any>;
    fetchOHLCV(i_exchange: string, i_ticker: string, i_timeFrame: string, i_since?: Number, i_limit?: Number): Promise<any>;
}
