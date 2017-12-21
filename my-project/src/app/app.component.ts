import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-first-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  footer = new FooterComponent(this.obj);
  constructor(private obj:ActivatedRoute){
    this.footer.name = 'hwllo';
  }
}
