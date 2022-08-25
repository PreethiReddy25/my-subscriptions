import { Component, OnInit } from '@angular/core';
import { Susbscriptions } from '../product';
import { ProductService } from '../product.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-add-subscriptions',
  templateUrl: './add-subscriptions.component.html',
  styleUrls: ['./add-subscriptions.component.css'],
  providers: [MessageService]
})
export class AddSubscriptionsComponent implements OnInit {

  newsub : Susbscriptions = new Susbscriptions();
  constructor(private _pserv:ProductService,private messageService: MessageService, private primengConfig: PrimeNGConfig) { }
  subsclist: Array<Susbscriptions> = [];

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Details Added Successfully'});
}
  addsubSubmit()
  {
    this._pserv.updateData(this.newsub);
    //console.log("add subscription is working",this.newsub);
    }    
}
