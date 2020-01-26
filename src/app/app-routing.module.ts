import { ProfileComponent } from './partialviews/userprofile/userprofile.component';
import { MarketviewComponent } from './partialviews/marketplaceview/marketview.component';
import { RegisterComponent } from './partialviews/register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditgameComponent } from './partialviews/editgame/editgame.component';


const routes: Routes = [
  {path:"",component:MarketviewComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:MarketviewComponent},
  {path:"profile",component:ProfileComponent},
  {path:"editgame",component:EditgameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
