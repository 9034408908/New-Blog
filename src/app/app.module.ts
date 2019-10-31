import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http"
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TranslateComponent } from './translate/translate.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RwSelect2Component } from './rw-select2/rw-select2.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { ModifyDetailsComponent } from './modify-details/modify-details.component';
import { GridsterModule } from 'angular-gridster2';
import {DragDropModule} from '@angular/cdk/drag-drop';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

export const appRoutes: Routes = [
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'add-detail',
    component: AddDetailComponent
  },
  {
    path: 'modify-details',
    component: AddDetailComponent
  },
  {
    path: 'emp/:id',
    component: EmpComponent,

    children: [
    {
    path: 'details',
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
    component: EmpComponent
  },
    ]
  }

  ];

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    DetailsComponent,
    AboutComponent,
    HeaderComponent,
    SidebarComponent,
    TranslateComponent,
    RwSelect2Component,
    AddDetailComponent,
    ModifyDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    GridsterModule,
    DragDropModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    BsDatepickerModule.forRoot(),
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
