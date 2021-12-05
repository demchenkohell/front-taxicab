import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  orders = [
    {user: 'user1', order: 'order1'},
    {user: 'user2', order: 'order2'},
    {user: 'user3', order: 'order3'},
    {user: 'user4', order: 'order4'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  takeOrder(): void {

  }

}
