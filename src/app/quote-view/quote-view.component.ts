import { SafePropertyRead } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { QuoteModel } from '../quote-model';
import { QuoteLibrary } from '../quote-library';

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {

  @Input() userName: any

  QuoteLibrary = QuoteLibrary;

  quoteRatings;

  checkRating(){
    
  }

  rateUp(index:number){
    //alert(index);
      this.QuoteLibrary[index].rating++;
      //alert(QuoteLibrary.length);
  }

  constructor() { }

  ngOnInit(): void {
    var ratings=[]
    for(var i = 0; i < QuoteLibrary.length; i++){
      this.quoteRatings = [QuoteLibrary[i].rating]
    }

    //alert(this.quoteRatings[0].value)

    
  }

}
function checkRating() {
  throw new Error('Function not implemented.');
}

