import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

export const appRoutes: Routes = [
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'emp',
    component: EmpComponent,

    children:[
    {
    path: 'details',
    component: DetailsComponent
  }
    ]

  },
  {
    path: 'about',
    component: AboutComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    DetailsComponent,
    AboutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
