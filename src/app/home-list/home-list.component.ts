import { Component, OnInit } from '@angular/core';
import { format } from 'util';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styles: []
})
export class HomeListComponent implements OnInit {
  private actualAmountInUSD = 100;
  inputData : string;
  lowerData : string;
  get amount(){
    return this.INR ? this.actualAmountInUSD*67 : this.actualAmountInUSD
  }
  
  Info = {
    name : 'Pooja',
    
}

address = {
 
  district: 'PUNE'
}

  INR = true

  get format()
  {
    return this.INR ? 'INR' : 'USD'
  }
  toggleINRandUSD(){
    this.INR = !this.INR
  }
  
  setData(data:string) {
    this.inputData = data;
 }

 setDatalower(data:string) {
  this.lowerData = data;
}

  constructor() { }

  ngOnInit() {
  }

}
