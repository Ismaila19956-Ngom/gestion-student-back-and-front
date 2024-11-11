import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  formGroup : FormGroup;
 constructor(private  fb : FormBuilder, private router : Router) {
   this.formGroup =this.fb.nonNullable.group({
     firstname:[null, Validators.required],
     lastname :[null,Validators?.required],
     username :[null,Validators.required ,Validators.email],
     password : [null , Validators.required]
   })
 }
}
