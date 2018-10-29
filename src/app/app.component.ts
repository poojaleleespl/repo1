import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Routingapp';
  openNav() {
    document.getElementById("nav a").style.width = "100%";
}

closeNav() {
  document.getElementById("nav a").style.width = "0";
}

ngOnInit(){

}
}
