import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { BodyPageComponent } from './body-page/body-page.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySubscriptionsComponent } from './my-subscriptions/my-subscriptions.component';
import { AddSubscriptionsComponent } from './add-subscriptions/add-subscriptions.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    MenuPageComponent,
    BodyPageComponent,
    MySubscriptionsComponent,
    AddSubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

