import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { Header } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { NewComponent } from "./newComponent/newComp";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    Header,
    FooterComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
