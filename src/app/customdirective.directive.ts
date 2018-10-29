import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(Element: ElementRef) { 
 // CustomdirectiveDirective.Element.innerText=" ";
  //Element.nativeElement.innerText="hi";
  }
}
