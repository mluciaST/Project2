import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonePlanComponent } from './phone-plan/phone-plan.component';
import { PhonePlansComponent } from './phone-plans/phone-plans.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BillsComponent } from './bills/bills.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { AccountContentComponent } from './account-content/account-content.component';
import { AccountSettingsFormComponent } from './account-settings-form/account-settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonePlanComponent,
    PhonePlansComponent,
    AccountSettingsComponent,
    BillsComponent,
    AccountsComponent,
    FooterComponent,
    DevicesComponent,
    HomeComponent,
    AccountContentComponent,
    AccountSettingsFormComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
