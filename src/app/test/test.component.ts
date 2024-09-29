import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //Interpolation example
  public name = "Aleem Pasha";
  public siteUrl = window.location.href;

  //property binding example 
  public testId = 'myId';

  //class binding 
  public successClass = "text-success";
  public failureClass = "text-failure";
  public hasDanger = false;
  public isSpecial = true;
  public messageClassses = {
    "text-success" : !this.hasDanger,
    "text-failure" : this.hasDanger,
    "text-special" : this.isSpecial

  }


  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
    this.greetUser()
  }

  greetUser(){
    return "Hello " + this.name
  }

  //Event Binding 
  public greeting = "";
  public eventType = "";
  onClick(event: any){
    console.log(event);
    this.greeting = "Button is clicked";
    this.eventType = event.type;
  }


  //Template Reference varaibles
  public inputValue = "";
  onSubmit(value:any){
    console.log(value)
    this.inputValue = value;
  }

}
