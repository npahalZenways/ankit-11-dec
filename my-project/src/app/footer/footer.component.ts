import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges {
  name;
  phone;
  constructor(private obj: ActivatedRoute) { 
    console.log('this is constructor');
  }
  abc(){
    console.log('this is a function');
  }
  // ngOnInit() {
  //   console.log('this is ngOnInit');
  //   this.name = this.obj.snapshot.params.name;
  //   this.phone = this.obj.snapshot.params.phone;
  //   localStorage.setItem('name', this.name)
  //   localStorage.setItem('phone', this.phone)
  // }
  ngOnChanges(changes){
    console.log('changes', changes)
  }
}
