import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name;
  phone;
  constructor(private obj: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.obj.snapshot.params.name;
    this.phone = this.obj.snapshot.params.phone;
    localStorage.setItem('name', this.name)
    localStorage.setItem('phone', this.phone)
  }

}
