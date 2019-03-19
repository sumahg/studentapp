import { Injectable } from '@angular/core'
import Student from '../student'
@Injectable({
    providedIn:'root',
    })
    
    export default class DataService{
    students: Student[]= [     
        {id: 1, firstName: 'suma', lastName: 'madhu', email: 'suma@getMaxListeners.com',  phone: '33333'},
        {id: 2, firstName: 'yuktha', lastName: 'madhu', email: 'suma@getMaxListeners.com', phone: '33333'}
    ]
    
    getStudents(){
        return this.students;
    }

    addStudent(student:Student){
        if (student.id == 0) {
            student.id = Math.round(Math.random()*10000);
          }
      this.students.push(student);
      
    }

   getStudentById(id:number){ 
    for ( var i = 0; i < this.students.length;i++){
      if(id == this.students[i].id){
 return this.students[i];
      }
    }
    return null;
   }
   updateStudent(student:Student){
    var updated = false;
    for ( var i = 0; i < this.students.length;i++){
      if(student.id == this.students[i].id){
   updated = true;
   this.students[i] = student;
   break;
      }
    }
    if(!updated){
      this.students.push(student);
    }
   }
   deleteStudents(){
    this.students = [];
   }
   deleteStudent(student:Student){
    var list:Student[]=[];
    for(var i=0; i<this.students.length;i++){
      if(student.id!=this.students[i].id){
        list.push(this.students[i])
      }
    }
    this.students = list;
   }
}
