import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuoteLibrary } from '../quote-library';


@Component({
  selector: 'app-quote-creator',
  templateUrl: './quote-creator.component.html',
  styleUrls: ['./quote-creator.component.css']
})
export class QuoteCreatorComponent implements OnInit {

  userSaying= new FormControl('');
  userSayor = new FormControl('')

  userQuote= QuoteLibrary;

  postUserQuote(){
    this.userQuote.push({saying:this.userSaying.value, sayor:this.userSayor.value, rating:5, poster:"KimTest"})
    alert(this.userQuote[0])
  }

  constructor() { }

  ngOnInit(): void {
  }

}
