import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'problem-choice',
    templateUrl: 'choice.component.html',
    styleUrls: ['choice.component.css']
})
export class ChoiceComponent{
    @Input() choice:any

    name = "foo"
    id = 1

    logFoo(){
        console.log(this.name, this.id)
    }
}
