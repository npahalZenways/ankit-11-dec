import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{
    isUserLoggedIn:boolean;
    constructor(){
        this.isUserLoggedIn = false;
    }
    getUser():boolean{
        return this.isUserLoggedIn;
    }
    setUser(value:boolean){
        this.isUserLoggedIn = value;
        console.log(this.isUserLoggedIn?'Logged In':'Logged out');
    }
}