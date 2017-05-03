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
import { ToastrService } from './common/toastr.service';
import { AppComponent } from './app.component';
import { DeckDetailComponent } from './deck/deck-detail/deck-detail.component';
import { DeckService } from './deck/shared/deck.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { DecksComponent } from './deck/decks.component'

@NgModule({
  declarations: [
      AppComponent,
      CardComponent,
      ChoiceComponent,
      NavBarComponent,
      ChoiceListComponent,
      DeckDetailComponent,
      DecksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChoiceService, ToastrService, DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
