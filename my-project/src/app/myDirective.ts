import { Directive, OnInit } from "@angular/core";

@Directive({
    selector: 'my-directive',
    host: {
        '(click)':'clicked($event)'
    },
    inputs: ['name']
})
export class MyDirective implements OnInit{
    name;
    clicked(e){
        console.log(e)
        e.target.innerHTML = 'this is clicked';
        e.target.style.border = "1px solid black";
        e.target.style.color = "white";
        e.target.style.background = "red";
    }
    constructor(){
        
    }
    ngOnInit(){
        console.log(this.name)
    }
}