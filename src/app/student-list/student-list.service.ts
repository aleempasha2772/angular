import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Istudent } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  
  constructor(private http:HttpClient) { }

  //private _url:string = "/assets/data/studnet.json"
  private _url:string = "/assets/data/employee.json";

  getStudents(): Observable<Istudent[]>{
    return this.http.get<Istudent[]>(this._url)
  }
}
