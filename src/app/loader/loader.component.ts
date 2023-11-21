import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit{
  
  isLoading:any;
  constructor(public loaderService: LoaderService) {
this.loaderService.isLoading.subscribe(res=>{
  this.isLoading=res;
})

}
ngOnInit(): void {   
}
}
