import { Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isHide = true;

  constructor(
    private http: HttpClient,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.formAuth = fb.group({
      'phoneNumber': ['',
        [Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[0-9]\d*$/)]
      ],
      'password': ['', Validators.required],
      'role': ['', Validators.required]
    })
  }

  formAuth = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    role: new FormControl()
  })

  getErrorMessage(field: string) {
    return this.formAuth.get(`${field}`)?.invalid ? 'Wrong input format' : '';
  }

  sendLoginForm () {
    localStorage.setItem('userData', JSON.stringify({
      role: this.formAuth.value.role, auth: true
    }))
    this.router.navigate(['/home'])
    console.log(this.formAuth.value);
    // this.http.post(`http://localhost:3000/login`, (this.formAuth.value))
    //   .subscribe(res => this.setToken(res))
  }

  sendRegisterForm () {
    localStorage.setItem('userData', JSON.stringify({
      role: this.formAuth.value.role, auth: true
    }))
    this.router.navigate(['/home'])
    console.log(this.formAuth.value);
    // this.http.post(`http://localhost:3000/register`, (this.formAuth.value))
    //   .subscribe(res => this.setToken(res))
  }

  setToken (res: any) {
    localStorage.setItem('userData', JSON.stringify({
      userId: res.id, token: res.token, role: res.role
    }))
    this.router.navigate(['/home'])
  }

}
