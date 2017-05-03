import { Routes } from '@angular/router'
import { CardComponent } from './card/card.component'
import { DecksComponent } from './deck/decks.component'
import { DeckDetailComponent } from
    './deck/deck-detail/deck-detail.component'

export const appRoutes:Routes = [
    { path: 'cards', component: CardComponent },
    { path: 'decks', component: DecksComponent },
    { path: 'decks/:id', component: DeckDetailComponent },
    { path: '', redirectTo: '/cards', pathMatch: 'full' }
]
