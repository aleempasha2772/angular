import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';

import { TdfComponent } from './tdf/tdf.component';
import { RfComponent } from './rf/rf.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    StudentListComponent,
    TdfComponent,
    RfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
