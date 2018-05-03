import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

  foods = [{value: 'idli', viewValue: 'idli'},{value: 'dosa', viewValue: 'dosa'}];

  constructor() { }

  ngOnInit() {
  }

}
