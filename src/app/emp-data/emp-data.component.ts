import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SignupService } from '../signup.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDataComponent } from '../delete-data/delete-data.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.scss']
})
export class EmpDataComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'address',
    'dob',
    'gender',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  userForm: any;
  data!: any[];

  constructor(private signupService: SignupService, 
    public dialog: MatDialog,
    private location: Location,) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployeeData(): void {
    this.signupService.getEmployeeData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      },
      error: console.error,
    });
  }
  
  opendialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDataComponent)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.signupService.deleteEmpData(id).subscribe(() => this.getEmployeeData()) ;
        
      }
    })

  }
  goBack() {
    this.location.back();
}}