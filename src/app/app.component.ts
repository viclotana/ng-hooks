// src/app/app.component.ts
import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, 
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy{

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
  }
  ngOnInit(): void {
    alert("2. on init is called");
  }
  ngDoCheck(): void {
    alert("3. do check is called");
  }
  ngAfterContentInit(): void {
    alert("4. after content init called");
  }
  ngAfterContentChecked(): void {
    alert("5. after content check called");
  }
  ngAfterViewInit(): void {
    alert('6. after view init called');
  }
 
  ngAfterViewChecked(): void {
    alert('7. after view init checked');
  }

  ngOnDestroy(): void {
    alert('8. on destroy called');
  }
  title = 'ngcanvas';

  constructor(){
    alert("1. on changes called");
  }
}
