import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private Http: HttpClient) { }

  private _url :string = "/assets/data/employee.json";


  
  getEmployees():Observable<IEmployee[]> {
     return this.Http.get<IEmployee[]>(this._url);
  }
  
}
