import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * creating the model in component and binding it with "formGroup"
   */

  //creating form controls manually
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

  //creating form controls through formBuider Service
  registrationForm1 = this.fb.group({
    username: ['Aleem'],
    password: [''],
    confirmPassword: [''],
    address : this.fb.group({
      city:[''],
      state:[''],
      country:['']
    })
  })


  setValues(){
    this.registrationForm.setValue({
        username : 'Aleem',
        password : 'asas',
        confirmPassword : 'asas',
        address : {
        city: 'vij',
        state: 'and',
        country : 'IND'
      }
    });
  }
  setValues1(){
    this.registrationForm1.setValue({
        username : 'Aleem',
        password : 'asas',
        confirmPassword : 'asas',
        address : {
        city: 'vij',
        state: 'and',
        country : 'IND'
      }
    });
  }

  onSubmit(){
    console.log(this.registrationForm1.value)
  }

}