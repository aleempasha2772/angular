import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor(private enrollmentService:EnrollmentService) { }

  ngOnInit(): void {
  }

  topicHasError = true;

  topics = ["cricket","football","Politics"]
  userModel = new User('Aleem','a@gmail.com','7780433243','football',true);

  validateTopic(value: any){

    if(value === "default"){
      this.topicHasError=true
    }
    else{
      this.topicHasError = false
    }
  }

  onSubmit(){
    this.enrollmentService.onEnroll(this.userModel)
    .subscribe(
      data=>{console.log('Success!',data)},
      error => {console.log(error)}
    )
  }

}
