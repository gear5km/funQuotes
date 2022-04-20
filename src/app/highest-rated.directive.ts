import { Directive, ElementRef } from '@angular/core';
import { QuoteLibrary } from './quote-library';

@Directive({
  selector: '[appHighestRated]'
})
export class HighestRatedDirective {
  
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor="red";
   }
}
