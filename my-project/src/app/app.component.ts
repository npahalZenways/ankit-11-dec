import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My APP';
  red="blue";
  redClass = "blueClass";
  person = {
    name:'',
    phone:''
  }
  imageSource = "https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg";
  changeTitle(title){
    this.title = title;
  }
  changeClass(){
    this.redClass = 'redClass';
  }
  print(title){
    console.log(title);
  }
  changeImg(source){
    this.imageSource = source;
  }
}
