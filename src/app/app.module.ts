import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule } from './toast/toast.module';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
