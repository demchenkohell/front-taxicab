import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  auth = JSON.parse(localStorage.getItem('userData')!).auth;
  constructor( public router: Router) {}
  canActivate(): boolean {
    if (!this.auth) {
      this.router.navigate(['authentication']);
      return false;
    }
    return true;
  }
}
