import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navOpenFlag: boolean;

  public toggeleSideNav() {
    this.navOpenFlag = !this.navOpenFlag;
  }
}
