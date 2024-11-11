import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Payment} from "../model/payment";
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";
import {PaymentType} from "../enums/PaymentType";
import {PaymentStatus} from "../enums/PaymentStatus";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private  http: HttpClient) { }
  private apiUrlListPayments = `${environment.backendHost}/listPayment`;
  private apiUrlId = `${environment.backendHost}/findById`;
  private apiUrlCode = `${environment.backendHost}/{code}`;
  private apiUrlStatus = `${environment.backendHost}/byStatus`;
  private apiUrlPayments = `${environment.backendHost}/updateStatus`;


  public  listPayment():Observable<Payment[]>{
    return  this.http.get<Payment[]>(this.apiUrlListPayments)
  }

  public  fiendById(id : number):Observable<Payment>{
    const urlId = `${this.apiUrlId}/${id}`;
    return  this.http.get<Payment>(urlId);
  }

  public  fiendByCode(student: string):Observable<Student>{
    const  urlCode =`${this.apiUrlCode}/${student}`;
    return this.http.get<Student>(urlCode)

  }

  public  findByStatus (status : string): Observable<Payment[]>{
    const urlStatus = `${this.apiUrlStatus}?status=${status}`;
    return  this.http.get<Payment[]>(urlStatus)

  }

  public  cratePayment( file:File,
                        date : Date ,
                        amount : number ,
                        type :PaymentType ,
                        status : PaymentStatus):Observable<Payment>{
    const formdata = new  FormData();
    formdata.append("file", file);
    formdata.append("date", date.toISOString());
    formdata.append("amount" ,amount.toString());
    formdata.append("type", type);
    formdata.append("status", status);
    return  this.http.post<Payment>(this.apiUrlListPayments,formdata);
  }


  public updatePayment(id : number , status : PaymentStatus): Observable<Payment>{
     const  urlUpdatePayments =`${this.apiUrlPayments}/${id}/updateStatus`;
     const  body ={status}
     return  this.http.post<Payment>(urlUpdatePayments, body)
  }


}
