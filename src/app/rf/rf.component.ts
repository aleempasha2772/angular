import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * creating the model in component and binding it with "formGroup"
   */

  registrationForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country : new FormControl('')
    })
  })
}
