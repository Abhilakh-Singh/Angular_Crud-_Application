import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public httpClient:HttpClient) { }
  isLoading=new BehaviorSubject<boolean>(false)
}
