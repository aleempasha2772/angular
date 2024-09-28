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
  
  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
    this.greetUser()
  }

  greetUser(){
    return "Hello " + this.name
  }


}
