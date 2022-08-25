import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  selectedMenu: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedMenu = "my_subs";
  }
  
  renderComponent(data: any) {
    console.log('selected menu item is', data);
    this.selectedMenu = data;
  }

}
