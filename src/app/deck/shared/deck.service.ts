import { Injectable } from '@angular/core'

@Injectable()
export class DeckService {
    getDecks(){
        return USER_DECKS
    }

    getDeck(id:number){
        return USER_DECKS.find(deck => deck.id === id)
    }
}

const USER_DECKS = [
    {id: 1,
        name: "100 Most Common Hanzi"},
    {id: 2,
        name: "Nature Vocab"},
    {id: 5,
        name: "Countries and Provinces"}
]
