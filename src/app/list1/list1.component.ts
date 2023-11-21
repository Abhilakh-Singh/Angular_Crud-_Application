import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { List2Component } from '../list2/list2.component';
import { EmployeeService } from '../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {
  data: any;
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

  constructor(
    private dialog: MatDialog,
    private empService: EmployeeService , private authService: AuthService, private router: Router ) {}

  ngOnInit(): void {
    this.getEmployeeList();
    
  }

  opendialog(): void {
    const dialogRef = this.dialog.open(List2Component);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList(): void {
    this.empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.error,
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number): void {
    this.empService.deleteEmployee(id).subscribe(() => {
      alert("User Data Deleted");
      this.getEmployeeList();
    });
  }

  openEditForm(data: any): void {
    const dialogRef = this.dialog.open(List2Component, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  logOut(){
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
    
  }

  // deleteAccount(id: number): void {
  //   this.signupService.deleteAccount(id).subscribe(() => {
  //     alert("Account Data Deleted Successfully");
  //     this.getEmployeeList();
  //   });
  // }
  
}
