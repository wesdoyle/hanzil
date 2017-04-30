import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CardComponent } from './card/card.component';
import { ChoiceComponent } from './choice/choice.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavBarComponent } from './navbar/navbar.component';
import { ChoiceListComponent } from './choice/choice-list.component';
import { ChoiceService } from './choice/shared/choice.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
      CardComponent,
      ChoiceComponent,
      NavBarComponent,
      ChoiceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [ChoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
