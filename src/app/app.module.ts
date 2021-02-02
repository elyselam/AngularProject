import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PostCreateComponent} from "./posts/post-create/post-create.component";
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";


import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
