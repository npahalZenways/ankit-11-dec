import { Component, ViewChild } from "@angular/core";
import { LoginService } from "../myService";

@Component({
    selector: 'app-forms',
    templateUrl: './newComp.html',
    styleUrls: ['./newComp.css'],
    inputs: ['myCompName']
})
export class NewComponent {
    title = 'app-forms'
    myCompName;
    user = {
        username: '',
        password: ''
    }
    myBirthday = new Date();
    CustomNumber = 1.4;
    @ViewChild('myForm') form;
    constructor(private login:LoginService) {
        if(this.login.getUser()){
            console.log('Logged in');
        } else {
            console.log('Logged out');
        }
        setInterval(()=>{
            this.myBirthday = new Date();
        },500);
    }
    submit(){
        console.log('submitted');
        console.log('Username is: ', this.user.username, " Password is: ", this.user.password);
    }
}