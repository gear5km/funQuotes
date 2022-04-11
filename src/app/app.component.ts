import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funQuotes';
  userName= new FormControl('');
  cred =''
  showUserName(){
    var cred = this.userName.value;
    alert(cred);
  }
}
