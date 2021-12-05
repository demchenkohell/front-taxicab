import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserDataDialogComponent} from "./user-data-dialog/user-data-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: string = '';
  name: string = '';
  phoneNumber: string = '';
  password: string = '';

  constructor(
    private routes: Router,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAuthData();
  }

  getAuthData(): void {
    const data = JSON.parse(localStorage.getItem('userData')!);
    if(data){
      this.role = data.role;
      this.name = data.name;
      this.phoneNumber = data.phoneNumber;
    }
  }

  logout(): void {
    localStorage.removeItem('userData');
    this.routes.navigate(['/authentication']);
  }

  openDialog(): void {
    this.matDialog.open(UserDataDialogComponent, {
      data: {name: this.name, phoneNumber: this.phoneNumber},
    });
  }


}
