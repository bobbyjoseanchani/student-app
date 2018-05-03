import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentSettingsDialogComponent } from '../component-settings-dialog/component-settings-dialog.component';
import {ComponentService} from '../component.service';
import { MyComponent } from '../my-component';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit {

  @Input() public navItem: string;
  components: MyComponent[];

  ngOnInit() {
    this.getComponents();
  }

  constructor(
    public dialog: MatDialog, private componentService: ComponentService) {}
  
  getComponents(){
    this.componentService.getComponents()
      .subscribe(components => {
        this.components = components;
      });
  }
  
  openDialog(component): void {
    if(component === undefined){
      component = null;
    }
    let dialogRef = this.dialog.open(ComponentSettingsDialogComponent, {
      width: '500px',
      maxWidth: '80vw',
      data: { component: component }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getComponents();
    });
  }

}

