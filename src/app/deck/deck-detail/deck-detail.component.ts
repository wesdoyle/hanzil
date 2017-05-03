import { Component } from '@angular/core'
import { DeckService } from '../shared/deck.service'

@Component({
    templateUrl: 'deck-detail.component.html',
    styleUrls: ['deck-detail.component.css']
})
export class DeckDetailComponent{
    deck:any
    constructor(private deckService:DeckService){
    }
    ngOnInit(){
        this.deck = this.deckService.getDeck(1)
    }
}


