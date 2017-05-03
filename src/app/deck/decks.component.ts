import { Component } from '@angular/core'
import { DeckService } from '../shared/deck.service'

@Component({
    templateUrl: 'decks.component.html',
    styleUrls: ['decks.component.css']
})
export class DecksComponent{
    decks:any
    constructor(private deckService:DeckService){
    }
    ngOnInit(){
        this.decks = this.deckService.getDecks()
    }
}


