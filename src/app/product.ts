export class Susbscriptions
{
    constructor(subid: number, subname: string, subpayfreq: string, subprice: number) {
        this.subscripid=subid;
        this.subscripname=subname;
        this.subscripfreq=subpayfreq;
        this.subscripprice = subprice;
        console.log('TestMsg');
    }
    public subscripid: number ;
    public subscripname: string ;
    public subscripfreq: string ;
    public subscripprice : number;

    // public value:number =0;
    // public DisplayValue: string='';
}