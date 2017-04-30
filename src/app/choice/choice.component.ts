import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { ToastrService } from '../common/toastr.service'

@Component({
    selector: 'problem-choice',
    templateUrl: 'choice.component.html',
    styleUrls: ['choice.component.css'],
})
export class ChoiceComponent implements OnInit{
    @Input() choice:any

    ngOnInit(){}

}
