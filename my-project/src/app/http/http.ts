import { Component, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";

@Component({
    selector: 'app-http',
    template: `
        <input type="email" [(ngModel)]="bodyObj.email" placeholder="Enter Email"><br><br>
        <input type="password" [(ngModel)]="bodyObj.password" placeholder="Enter password"><br><br>
        <button (click)="getAPI()">GET api</button>
        <button (click)="postAPI()">POST api</button>
    `
})
export class HttpComponent implements OnInit{
    headers;
    params;
    reqOptions;
    bodyObj = {
        email: '',
        password: ''
    }
    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('x-access-token', sessionStorage.token)
        this.params = new URLSearchParams();
        this.params.set('base', 'USD');
        this.reqOptions = new RequestOptions({
            params: this.params,
            headers: this.headers
        });
    }
    getAPI(){
        this.http.get('https://api.fixer.io/latest', this.reqOptions).subscribe(function (res) {
            let response = res.json()
            console.log('this is from http component: ', response);
        }, function(error) {
            console.log(error);
        })
    }
    postAPI(){
        console.log('Call started...')
        this.http.post('http://192.168.0.115:4000/login', this.bodyObj).subscribe(res=>{
            let response = res.json();
            console.log('This is response from post: ', response)
        }, err=>{  
            console.log(err);
        })
    }
    ngOnInit(){
        
    }
}