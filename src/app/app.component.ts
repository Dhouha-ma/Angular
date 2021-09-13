import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve,reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      )
    }
  );

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
