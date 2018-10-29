import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus-list',
  templateUrl: './aboutus-list.component.html',
  styles: []
})
export class AboutusListComponent implements OnInit {
  today = new Date();
  constructor() { }

  ngOnInit() {
  }

}
