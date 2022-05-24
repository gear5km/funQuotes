import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuoteLibrary } from '../quote-library';


@Component({
  selector: 'app-quote-creator',
  templateUrl: './quote-creator.component.html',
  styleUrls: ['./quote-creator.component.css']
})
export class QuoteCreatorComponent implements OnInit {

  @Input() userName: any

  userSaying= new FormControl('');
  userSayor = new FormControl('')

  quoteLibrary= QuoteLibrary;

  postUserQuote(){
    this.quoteLibrary.push({saying:this.userSaying.value, sayor:this.userSayor.value, rating:0, poster:this.userName.value})
    alert(this.quoteLibrary[0])
  }

  constructor() { }

  ngOnInit(): void {
  }

}
