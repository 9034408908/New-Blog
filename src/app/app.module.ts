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
import { HttpClientModule } from "@angular/common/http"

export const appRoutes: Routes = [
  {
    path: 'details',
    component: DetailsComponent
  },
  { 
    path: 'emp',
    component: EmpComponent,

    children: [
    {
    path: 'emp/details',
    component: DetailsComponent
  },
    ]

  },
  {
    path: 'about',
    component: AboutComponent,

    children: [
    {
     path: 'emp',
    component: EmpComponent,
  },
    ]
    
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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
