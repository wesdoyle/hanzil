import { Component, OnInit } from '@angular/core'
import { ChoiceService } from './shared/choice.service'

@Component({
    selector: 'problem-choice-list',
    templateUrl: 'choice-list.component.html',
    styleUrls: ['choice-list.component.css']
})
export class ChoiceListComponent implements OnInit{
    choices:any[]
    constructor(private choiceService: ChoiceService){

    }

    ngOnInit(){
        this.choices = this.choiceService.getChoices()
    }
}
