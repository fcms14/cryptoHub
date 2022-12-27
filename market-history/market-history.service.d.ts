export declare class MarketHistoryService {
    listTickers(i_exchange: string): Promise<[] | any>;
    fetchOHLCV(i_exchange: string, i_ticker: string, i_timeFrame: string, i_since?: Number, i_limit?: Number): Promise<any>;
}
