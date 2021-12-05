import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./auth/auth.guard";

const routes: Routes = [
  { path: 'authentication', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
