import { CardComponent } from './card/card.component.ts'
import { DecksComponent } from './deck/deck.component.ts'
import { DeckDetailComponent } from
    './deck/deck-detail/deck-detail.component.ts'

export const appRoutes = [
    { path: 'cards', component: CardComponent },
    { path: 'decks', component: DecksComponent },
    { path: 'decks/:id', component: DeckDetailComponent },
    { path: '', redirectTo: '/decks', pathMatch: 'full' }
]
