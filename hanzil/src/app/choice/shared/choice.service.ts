import { Injectable } from '@angular/core'

@Injectable()
export class ChoiceService {
    getChoices(){
        return EVENTS
    }
}

const EVENTS = [
    {id: 1,
        name: "Big"},
    {id: 2,
        name: "To Be"},
    {id: 3,
        name: "There"},
]
