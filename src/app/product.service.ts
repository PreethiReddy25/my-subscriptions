import { Injectable } from '@angular/core';
import  { Susbscriptions } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }



public getSubscriptionList() : Array<Susbscriptions>
 {


  let sabc = new Susbscriptions(1,'NetFlix', 'Monthly',20.96);
  let sxyz = new Susbscriptions(2,'AmazonPrime', 'Yearly',17.09);
  let spqr = new Susbscriptions(3,'Disney', 'Yearly', 50.08);
  let smno = new Susbscriptions(4,'Hulu','Yearly',60);

  let sublist : Array<Susbscriptions>= [];
  sublist.push(sabc);
  sublist.push(sxyz);
  sublist.push(spqr);
  sublist.push(smno);
  return sublist;
 }
}
