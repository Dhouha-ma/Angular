import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  seconds:number;

  constructor(){}
  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
        this.seconds = value;
      },
      (error: any) => {
        alert('error');
      },
      () =>{
        alert('conplete');
      }
    );
  }

}
