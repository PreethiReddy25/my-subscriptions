import { Injectable } from '@angular/core';
import { Susbscriptions } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sabc = new Susbscriptions(1, 'NetFlix', 'Monthly', 20.96);
  sxyz = new Susbscriptions(2, 'AmazonPrime', 'Yearly', 17.09);
  spqr = new Susbscriptions(3, 'Disney', 'Yearly', 50.08);
  smno = new Susbscriptions(4, 'Hulu', 'Yearly', 60);

  sublist: Array<Susbscriptions> = [this.sabc, this.sxyz, this.spqr, this.smno];
  // sublist.push(sabc);
  // sublist.push(sxyz);
  // sublist.push(spqr);
  // sublist.push(smno);

  constructor() { }



  public getSubscriptionList(): Array<Susbscriptions> {
    return this.sublist;
  }

  public updateData(newsub: Susbscriptions) {
    console.log("Data added is", newsub);
    this.sublist.push(newsub);
    console.log('new data is', this.sublist);
  }

}
