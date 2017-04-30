import { Component } from '@angular/core'

@Component({
    selector: 'problem-choice-list',
    templateUrl: 'choice-list.component.html',
    styleUrls: ['choice-list.component.css']
})
export class ChoiceListComponent{

    logFoo(){
        console.log('foo')
    }
}
