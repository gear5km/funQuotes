import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funQuotes';
  userName= new FormControl('', Validators.required);
  userHasLoggedIn=false;

  parseUserName(){
    var user = this.userName.value;
    //alert(user);
    if(this.userName.valid){
      this.userHasLoggedIn=true;
    }

    //var userArea = document.getElementById('#userArea')
    //userArea.style.display= "none";
  }
}
