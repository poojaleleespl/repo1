import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {
  num1: number = 2.5;
  num2: number = 0.5;
  constructor() { }

  ngOnInit() {
  }

}
