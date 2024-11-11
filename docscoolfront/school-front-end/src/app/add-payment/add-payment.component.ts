import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";
import {PaymentsService} from "../services/payments.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {PaymentType} from "../enums/PaymentType";
import {PaymentStatus} from "../enums/PaymentStatus";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    CommonModule,
    MatSelect,
    MatOption,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent {
  fromGroup : FormGroup
  constructor(private  fb : FormBuilder , private  router :Router , private servicePayment : PaymentsService) {
    this.fromGroup = this.fb.nonNullable.group({
      file :[null,Validators.required],
      date :[null, Validators.required],
      amount: [null, [Validators.required, Validators.min(0)]],
      type :[null, Validators.required],
      status : [null ,Validators.required]

    })
  }


  savePayment() {
    if (this.fromGroup.valid){
      const {file, date , amount  , type , status}= this.fromGroup.value;
      this.servicePayment.cratePayment(file, date,amount,type,status).subscribe({
        next :(data)=>{
          console.log("payment reuissi avec succées" + data)
          this.fromGroup.reset();
        },
        error: (err)=>{
          console.log("error lor du payment"+err)
        }
      })
    }
  }
}
