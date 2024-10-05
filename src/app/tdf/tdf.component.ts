import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

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

}
