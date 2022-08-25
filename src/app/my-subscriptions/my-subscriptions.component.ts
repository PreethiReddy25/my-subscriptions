import { Component, OnInit } from '@angular/core';
import { Susbscriptions } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.css']
})
export class MySubscriptionsComponent implements OnInit {

   products: Susbscriptions[] = [];

  constructor(private productService: ProductService) { }
  

  ngOnInit(): void {
     this.products=this.productService.getSubscriptionList();
  }

}
