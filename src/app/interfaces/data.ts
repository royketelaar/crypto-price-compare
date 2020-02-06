export interface Price {
    bitvavo:        Bitcoinmeester;
    bitcoinmeester: Bitcoinmeester;
    litebit:        Bitcoinmeester;
    bitonic:        Bitcoinmeester;
    bitmymoney:     Bitcoinmeester;
    satos:          Bitcoinmeester;
    bitrush:        Bitcoinmeester;
}

export interface Bitcoinmeester {
    name:      string;
    link_buy:  string;
    link_sell: string;
    data:      Data;
}

export interface Data {
    success:   boolean;
    value:     string;
    btc:       string;
    min_buy:   string;
    min_sell:  string;
    available: string;
}
