import { Component, OnInit } from '@angular/core';
import Student from '../student';
import { Router } from '@angular/router';
import DataSevice from '../service/data.service';
import DataService from '../service/data.service';
 
//import { summaryFileName } from '@angular/compiler/src/aot/util';
//import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private router: Router, private dataService:DataService) {}
  student: Student;
  students=[];
 resetStudent() {
   this.student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
   }
 }

  ngOnInit() {
 this.resetStudent();

  }
  addUpdateStudent() {
    
      this.resetStudent();
  }
  selectStudent(student){
    this.student=student;
  }
  deleteStudent(id){
    console.log(id);
    var list=[];
    for(var i=0; i<this.students.length;i++){
      if(id!=this.students[i].id){
        list.push(this.students[i])
      }
    }
    this.students = list;
  }

  deleteAllStudents() {
    this.dataService.deleteStudents();
    this.students = this.dataService.getStudents();
  }

}
