import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name:"machine a laver",
      status: "allume"
    },
    {
      name:"television",
      status: "allume"
    },
    {
      name:"ordinateur",
      status: "eteint"
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    alert('hello')
  }
}
