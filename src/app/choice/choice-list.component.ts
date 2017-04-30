import { Component, OnInit } from '@angular/core'
import { ChoiceService } from './shared/choice.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    selector: 'problem-choice-list',
    templateUrl: 'choice-list.component.html',
    styleUrls: ['choice-list.component.css']
})
export class ChoiceListComponent implements OnInit{
    choices:any[]

    constructor(private choiceService: ChoiceService, private toastr: ToastrService){
    }

    handleChoiceClick(choiceName){
        this.toastr.info(choiceName)
    }

    ngOnInit(){
        this.choices = this.choiceService.getChoices()
    }
}
