import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './headerTemplate.html',
    styleUrls: ['./header.css']
})
export class Header{
    title = 'My APP';
    red = "blue";
    redClass = "blueClass";
    person = {
        name: '',
        phone: ''
    }
    yourChoice = "";
    persons = [];
    @ViewChild('titleVar') varTitle;
    imageSource = "https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg";

    constructor(private router:Router){
        
    }

    changeTitle(title) {
        this.title = title;
    }
    changeClass() {
        this.redClass = 'redClass';
    }
    print(title) {
        console.log(title);
        console.log('Property from viewChild is: ', this.varTitle);
    }
    changeImg(source) {
        this.imageSource = source;
    }
    addPerson() {
        // this.persons.push(this.person);
        // this.person = {
        //     name: '',
        //     phone: ''
        // }
        if(this.person.name == 'Nitin' && this.person.phone == '12345'){
            this.router.navigate(['/footer/'+this.person.name+'/'+this.person.phone]);
        } else {
            this.title = 'Error';
        }
    }
}