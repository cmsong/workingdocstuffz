import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partialviews/navbar/defaultnavbar/navbar.component';
import { StusernavbarComponent } from './partialviews/navbar/stusernavbar/stusernavbar.component';
import { CollapsebarComponent } from './partialviews/collapsebar/collapsebar.component';
import { MarketviewComponent } from './partialviews/marketplaceview/marketview.component';
import { LoginfullviewComponent } from './FullViews/loginfullview/loginfullview.component';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './partialviews/searchbar/searchbar.component';
import { RegisterComponent } from './partialviews/register/register.component';
import { RegisterfullviewComponent } from './FullViews/registerfullview/registerfullview.component';
import { ProfileComponent } from './partialviews/userprofile/userprofile.component';
import { Userprofileservice } from './services/userprofile.service';
import { PremiumbuttonComponent } from './partialviews/premiumbutton/premiumbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StusernavbarComponent,
    CollapsebarComponent,
    MarketviewComponent,
    LoginfullviewComponent,
    LoginComponent,
    SearchbarComponent,
    RegisterComponent,
    RegisterfullviewComponent,
    ProfileComponent,
    PremiumbuttonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Userprofileservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
