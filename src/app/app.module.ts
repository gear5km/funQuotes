import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { QuoteCreatorComponent } from './quote-creator/quote-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteViewComponent,
    QuoteCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
