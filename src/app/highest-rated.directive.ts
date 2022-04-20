import { Quote } from '@angular/compiler';
import { Directive, ElementRef } from '@angular/core';
import { QuoteLibrary } from './quote-library';

@Directive({
  selector: '[appHighestRated]'
})
export class HighestRatedDirective {
  QuoteLibrary=QuoteLibrary;
  
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor="red";
   }
}
