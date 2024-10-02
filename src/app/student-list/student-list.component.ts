import { Component, OnInit } from '@angular/core';
import { StudentListService } from './student-list.service';
import { Istudent } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentListService) { }

  public students: Istudent[]= [];
  
  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      data=> this.students = data
    )
  }



}
