import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthService} from "../serviceAuth/auth.service";

@Component({
  selector: 'app-login',
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
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formGroup : FormGroup;
  constructor(private fb : FormBuilder, private router : Router, private  authservice : AuthService) {
    this.formGroup = this.fb.nonNullable.group({
      username:[null, Validators.required],
      password:[null,Validators.required]

    })
  }

  seConnecter() {
    if (this.formGroup.valid){
      this.authservice.login();
      this.router.navigate(['tymplate'])
    }
    }

  inscription() {

    this.router.navigate(["/inscription"]);

  }
}

