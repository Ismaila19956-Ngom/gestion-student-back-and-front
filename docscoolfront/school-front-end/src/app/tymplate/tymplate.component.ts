import { Component } from '@angular/core';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, } from "@angular/material/icon";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatButton,  MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuModule,} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, } from "@angular/material/list";
import {FormGroup, FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {StudentService} from "../services/student.service";
import {Observable, Subscriber} from "rxjs";
import {Student} from "../model/student";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tymplate',
  standalone: true,
  imports: [
    MatMenu,
    MatIcon,
    MatDrawerContainer,
    MatDrawer,
    MatList,
    MatListItem,
    RouterOutlet,
    MatToolbar,
    MatIconButton,
    RouterLink,
    MatButton,
    MatMenuItem,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatInput,
    FormsModule,
    NgIf

  ],
  templateUrl: './tymplate.component.html',
  styleUrl: './tymplate.component.css'
})
export class TymplateComponent {
    public programId!: string;
    searchQuery!: number;
    student!: Student;
    students: Student[] = [];
    errorMessage!: string;

    constructor(private serviceStudent: StudentService) {}

    searchStudent() {
        if (this.searchQuery) {
            this.serviceStudent.searchStudent(this.searchQuery).subscribe(
                (data: Student) => {
                    this.student = data;
                    this.errorMessage = '';
                },
                (error) => {
                    console.error('Erreur lors de la recherche de l\'étudiant:', error);
                    this.errorMessage = 'Veuillez entrer un ID d\'étudiant valide.';
                }
            );
        } else {
            this.errorMessage = 'Veuillez entrer un ID d\'étudiant valide.';
        }
    }

    public  loadStudentByProgramId(programId : string){
        this.serviceStudent.findStudentsByProgramId(programId).subscribe(
            (students) => {
                this.students= students;
            },
            (error) => {
                console.error('Erreur lors de la récupération des étudiants:', error);
                this.errorMessage = 'Erreur lors de la récupération des étudiants.';
            }
        );
    }
}
