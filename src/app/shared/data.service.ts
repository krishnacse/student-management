import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore,private http1: HttpClient) { }

//add new student
addStudent(student: Student){
  student.id = this.afs.createId();
  return this.afs.collection('/Students').add(student);
}
//get all students
getAllStudents(){ 
  return this.afs.collection('/Students').snapshotChanges();
}
//delete student
deleteStudent(student : Student){
  return this.afs.doc('/Students/'+student.id).delete();
}

//update  student
updateStudent(student: Student){
  this.deleteStudent(student);
  this.addStudent(student);

}

getConfig() {
 let url =  "https://jsonplaceholder.typicode.com/todos/1"
  return this.http1.get(url);
}

}
