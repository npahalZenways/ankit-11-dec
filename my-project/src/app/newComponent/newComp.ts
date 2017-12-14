import { Component } from "@angular/core";

@Component({
    selector: 'app-forms',
    templateUrl: './newComp.html',
    styleUrls: ['./newComp.css'],
    inputs: ['myCompName']
})
export class NewComponent {
    title = 'app-forms'
    myCompName;
    constructor() {
        
    }
}