import { ProfileComponent } from './partialviews/userprofile/userprofile.component';
import { MarketviewComponent } from './partialviews/marketplaceview/marketview.component';
import { RegisterComponent } from './partialviews/register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:MarketviewComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:MarketviewComponent},
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
