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

  @Input() quoteList2: any

  @Input() userName: any

  quoteList = QuoteLibrary;


  constructor() { }

  ngOnInit(): void {
  }

}
