import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { DriverComponent } from './driver/driver.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {UserDataDialogModule} from "./user-data-dialog/user-data-dialog.module";
// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    UserDataDialogModule
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
