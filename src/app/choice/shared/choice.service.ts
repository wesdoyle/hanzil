import { Injectable } from '@angular/core'

@Injectable()
export class ChoiceService {
    getChoices(){
        return ENG_CHOICES
    }

    getChoice(id:number){
        return ENG_CHOICES.find(choice => choice.id === id)
    }
}

const ENG_CHOICES = [
    {id: 1,
        name: "Big"},
    {id: 2,
        name: "To Be"},
    {id: 3,
        name: "There"},
]
