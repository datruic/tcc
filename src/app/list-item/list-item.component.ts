import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../item';
import { CHEF } from '../chef-data';
import { EVENTS } from '../events-data';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  heading: string;
  mode: boolean; // true => chef, false => events
  item_details: Item[];

  constructor(private router: Router) {}

  ngOnInit() {
    (this.router.url === '/chef') ? this.mode = true : this.mode = false;
    this.getData();
  }

  getData(): void {
    if (this.mode) {
      this.heading = 'Our Chef';
      this.item_details = CHEF;
    }
    else if (!this.mode){
      this.heading = 'Events';
      this.item_details = EVENTS;
    }
  }

}
