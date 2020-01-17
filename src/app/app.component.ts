import { Component, VERSION, ElementRef, ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  getdata()
  {
   this.router.navigate(['table'])
  }
 
}
