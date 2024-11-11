import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTableDataSource,
  MatTableModule
} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {Student} from "../model/student";
import {StudentService} from "../services/student.service";
import {MatMenu} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    MatPaginator,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    MatCardContent,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    CommonModule,
    MatTableModule,
    MatMenu,
    MatIcon
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements  OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  student: Student[] = []; // Liste des étudiants
  errorMessage: string = '';
  public dataSource = new MatTableDataSource<Student>();
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'code', 'programId','actions'];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.gestlisttsudent();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public gestlisttsudent() {
    this.studentService.listStudents().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error("Une erreur s'est produite:", err);
      }
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(
        () => {
          this.student = this.student.filter(student => student.id !== id);
          this.errorMessage = '';
        },
        error => {
          console.error('Erreur lors de la suppression de l\'étudiant:', error);
          this.errorMessage = error.error.message || 'Erreur lors de la suppression de l\'étudiant.'; // Gérer l'erreur ici
        }
    );
  }
}
