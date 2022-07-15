import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { PhonePlansComponent } from './phone-plans/phone-plans.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'phone-plans', component: PhonePlansComponent},
  {path:'devices', component: DevicesComponent},
  {path: 'accounts', component: AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
