import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Student} from "../model/student";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  private apiUrl = `${environment.backendHost}/studentsList`;
  private apiUrlAddStudent = `${environment.backendHost}/createStudent`;
  private apiUrlSearchStudent = `${environment.backendHost}/findStudent`;
  private apiUrlDeleteStudent = `${environment.backendHost}/deleteById`;
    private apiUrlProgrammIdStudent = `${environment.backendHost}/program`;
  public listStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
  public  searchStudent(id : number):Observable<Student>{
    if (!id){
      throw  new Error("Votre identifiant "+ id + "est Invalide veuillez saisir le bon identifiant")
    }
    const  searchId = `${this.apiUrlSearchStudent}/${id}`
    return  this.http.get<Student>(searchId).pipe(
        catchError(error => {
          console.error('Error fetching student:', error);
          return throwError(error);
        })
    );
  }
    public deleteStudent(id: string): Observable<void> {
        const urlDelete = `${this.apiUrlDeleteStudent}/${id}`;
        return this.http.delete<void>(urlDelete).pipe(
            catchError(err => {
                console.error("Erreur lors de la suppression:", err);
                return throwError(err);
            })
        );
    }

    public findStudentsByProgramId(programId : string): Observable<Student[]> {
        const studentProgramUrl = `${this.apiUrlProgrammIdStudent}/${programId}`;
        return this.http.get<Student[]>(studentProgramUrl);
    }

    public addStudent(firstName: string, lastName: string, code: string, programId: string): Observable<Student> {
        const studentAdd = { firstName, lastName, code, programId };
        return this.http.post<Student>(this.apiUrlAddStudent, studentAdd);
    }


}
