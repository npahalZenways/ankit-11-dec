import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'app-forms',
    templateUrl: './newComp.html',
    styleUrls: ['./newComp.css'],
    inputs: ['myCompName']
})
export class NewComponent {
    title = 'app-forms'
    myCompName;
    @ViewChild('myForm') form;
    constructor() {
        
    }
    submit(){
        console.log('submitted')
        console.log(this.form)
    }
}