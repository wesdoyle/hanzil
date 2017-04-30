import { Component } from '@angular/core'

@Component({
    selector: 'problem-choice-list',
    templateUrl: 'choice-list.component.html',
    styleUrls: ['choice-list.component.css']
})
export class ChoiceListComponent{
    choice1 = {
        id: 1,
        name: 'Big'
    }

    choice2 = {
        id: 2,
        name: 'Here'
    }

    choice3 = {
        id: 3,
        name: 'Question Particle'
    }

    logFoo(){
        console.log('foo')
    }
}
