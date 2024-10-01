import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employees = [
    {"id": 1,"name":"Aleem","age":24},
    {"id": 2,"name":"Nayeem","age":24},
    {"id": 3,"name":"Pasha","age":24},
    {"id": 4,"name":"Mohammad","age":24},
    {"id": 4,"name":"Abdul","age":24},
  ]


}
