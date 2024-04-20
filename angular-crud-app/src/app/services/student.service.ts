import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { HttpClientModule, HttpClient } from '@angular/common/http';
constructor(private http: HttpClient) { }

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://your-backend-url/api/students';

  constructor(private http: HttpClient) { }

  // Create a new student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // Read all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Update a student
  updateStudent(student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<Student>(url, student);
  }

  // Delete a student
  deleteStudent(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Student>(url);
  }
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
}
