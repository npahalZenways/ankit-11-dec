import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { Header } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { NewComponent } from "./newComponent/newComp";
import { CommonModule } from "@angular/common";
import { AnyComponentComponent } from './any-component/any-component.component';
import { RouterModule } from "@angular/router";
import { CompComponent } from './comp/comp.component';
import { MyPipe } from "./myPipe";
import { LoginService } from "./myService";
import { MyDirective } from "./myDirective";
import { HttpComponent } from "./http/http";
// http service 
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyDirective,
    AppComponent,
    Header,
    FooterComponent,
    NewComponent,
    AnyComponentComponent,
    CompComponent,
    MyPipe,
    HttpComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'header',
      pathMatch: 'full'
    },{
      path: 'header',
      component: Header,
      children: [{
        path: 'any',
        component: AnyComponentComponent
      },{
        path: 'comp',
        component: CompComponent
      }]
    },{
      path: 'footer/:name/:phone',
      component: FooterComponent
    }, {
      path: 'new',
      component: NewComponent
    }])
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
