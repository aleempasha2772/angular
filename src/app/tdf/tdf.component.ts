import { Component, OnInit } from '@angular/core';

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

  validateTopic(value: any){

    if(value === "default"){
      this.topicHasError=true
    }
    else{
      this.topicHasError = false
    }
  }

}
