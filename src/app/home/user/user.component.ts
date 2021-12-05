import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.formOrder = fb.group({
      'location': ['', Validators.required],
      'destination': ['', Validators.required]
    })
  }

  formOrder = new FormGroup({
    location: new FormControl(),
    destination: new FormControl()
  })

  getErrorMessage(field: string) {
    return this.formOrder.get(`${field}`)?.invalid ? 'Wrong input format' : '';
  }

  sendOrder () {
    console.log(this.formOrder.value);
    // this.http.post(`http://localhost:3000/login`, (this.formOrder.value))
    //   .subscribe(res => this.setToken(res))
  }

  ngOnInit(): void {
  }

}
