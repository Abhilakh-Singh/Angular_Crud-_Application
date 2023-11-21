import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { List2Component } from './list2/list2.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { LoaderComponent } from './loader/loader.component';
import { EmployeeInterceptor } from './employee.interceptor';

import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
    SignupComponent,
    LoginComponent,
    EmpDataComponent,
    DeleteDataComponent,
    LoaderComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
   MatProgressBarModule
    
    
  ],
  providers: [
     {provide: MatDialogRef,useValue: {},},
    {provide:HTTP_INTERCEPTORS,useClass:EmployeeInterceptor,multi:true},
  
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
