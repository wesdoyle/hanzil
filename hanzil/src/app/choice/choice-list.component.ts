import { Component } from '@angular/core'

@Component({
    selector: 'problem-choice-list',
    templateUrl: 'choice-list.component.html',
    styleUrls: ['choice-list.component.css']
})
export class ChoiceListComponent{
    choices = [
        {
            id: 1,
            name: 'Big'
        },

        {
            id: 2,
            name: 'To Be'
        },

        {
            id: 3,
            name: 'Question Particle'
        }
    ]

    logFoo(){
        console.log('foo')
    }
}
