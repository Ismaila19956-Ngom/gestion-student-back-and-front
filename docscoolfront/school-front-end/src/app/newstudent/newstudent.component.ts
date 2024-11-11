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
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-newstudent',
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
  templateUrl: './newstudent.component.html',
  styleUrl: './newstudent.component.css'
})
export class NewstudentComponent {
  formGroup : FormGroup;
  constructor(private  fb : FormBuilder, private  router : Router, private studentService : StudentService) {
    this.formGroup = this.fb.nonNullable.group({
      firstName :[null,Validators.required],
      lastName : [null,Validators.required],
      code :[null, Validators.required],
      programId :[null,Validators.required]
    })
  }

  saveStudent() {
    if (this.formGroup.valid) {
      const { firstName, lastName, code, programId } = this.formGroup.value;

      this.studentService.addStudent(firstName, lastName, code, programId).subscribe({
        next: (data) => {
          console.log("Étudiant ajouté avec succès", data);
          this.formGroup.reset();
        },
        error: (err) => {
          console.error("Erreur lors de l'ajout de l'étudiant", err);
        }
      });
    } else {
      console.log("Le formulaire n'est pas valide");
    }
  }

}
