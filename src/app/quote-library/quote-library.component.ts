import { Component, Input, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';
import { QuoteLibrary } from '../quote-library';
@Component({
  selector: 'app-quote-library',
  templateUrl: './quote-library.component.html',
  styleUrls: ['./quote-library.component.css']
})
export class QuoteLibraryComponent implements OnInit {

  @Input() userName: any;

  quoteLibrary= QuoteLibrary;

  constructor() { }

  ngOnInit(): void {
  }

}
