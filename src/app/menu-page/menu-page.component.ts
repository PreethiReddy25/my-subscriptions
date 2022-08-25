import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  
  @Output() onMenuSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }
  items: MenuItem[]=[];
  

  ngOnInit(): void {

    this.items =[
      {
        id: 'my_subs',
        label:'My Subscriptions',
        command: () => {
          this.emitToLandingPage('my_subs')
        }
      },
      {
        id: 'add_subs',
        label:'Add Subscription',
        command: () => {
          this.emitToLandingPage('add_subs')
        }
      }
    ];
  }

  emitToLandingPage(menuId: string) {
    this.onMenuSelected.emit(menuId);
  }
}