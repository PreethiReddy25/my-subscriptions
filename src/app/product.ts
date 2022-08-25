export class Susbscriptions {
    constructor(subid?: number, subname?: string, subpayfreq?: string, subprice?: number) {
        if (subid)
            this.subscripid = subid;
        if (subname)
            this.subscripname = subname;
        if (subpayfreq)
            this.subscripfreq = subpayfreq;
        if (subprice)
            this.subscripprice = subprice;
        console.log('TestMsg');
    }
    public subscripid: number;
    public subscripname: string;
    public subscripfreq: string;
    public subscripprice: number;

    // public value:number =0;
    // public DisplayValue: string='';
}