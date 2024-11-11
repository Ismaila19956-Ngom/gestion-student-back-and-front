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
import {RouterOutlet} from "@angular/router";
import {PaymentsService} from "../services/payments.service";
import {Payment} from "../model/payment";

@Component({
  selector: 'app-paments',
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
     RouterOutlet
  ],
  templateUrl: './paments.component.html',
  styleUrl: './paments.component.css'
})
export class PamentsComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource = new MatTableDataSource<Payment>();
  public displayedColumns: string[] = ['id', 'date', 'amount', 'type', 'status'];

  constructor(private servicePayment: PaymentsService) {}

  ngOnInit(): void {
    this.getListPayment();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  public getListPayment() {
    this.servicePayment.listPayment().subscribe({
      next: (data) => {
        console.log('Données assignées à dataSource:', data);
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error("Une erreur s'est produite:", err);
      }
    });
  }

}
