export declare class MarketHistoryService {
    findAll(): void;
    findOne(i_exchange: string, i_ticker: string, i_timeFrame: string, i_since?: Number, i_limit?: Number): Promise<any>;
}