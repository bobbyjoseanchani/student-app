import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyComponent } from '../my-component'; 
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import {ComponentService} from '../component.service';

@Component({
  selector: 'app-component-settings-dialog',
  templateUrl: './component-settings-dialog.component.html',
  styleUrls: ['./component-settings-dialog.component.scss']
})
export class ComponentSettingsDialogComponent implements OnInit {

  selectOptions = [{value: 'option1', viewValue: 'option1'},{value: 'option2', viewValue: 'option2'}];

  componentForm = new FormGroup({
    componentLabel: new FormControl(''),
    componentDesc: new FormControl(''),
    componentType: new FormControl(''),
    assessmentGroup: new FormControl(''), 
    dataType: new FormControl(''),
    maxScore: new FormControl(''),
    passingScore: new FormControl(''),
    calcMethode: new FormControl('')    
  });

  componentId: number;

  constructor(
    public dialogRef: MatDialogRef<ComponentSettingsDialogComponent>,
    public dialog: MatDialog,
    private componentService: ComponentService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if(this.data && this.data.component && this.data.component!= null){
      this.componentId = this.data.component.id;
      this.componentForm.setValue({
        componentLabel : this.data.component.componentLabel,
        componentDesc: this.data.component.componentDesc,
        componentType: this.data.component.componentType,
        assessmentGroup: this.data.component.assessmentGroup,
        dataType: this.data.component.dataType,
        maxScore: this.data.component.maxScore,
        passingScore: this.data.component.passingScore,
        calcMethode: this.data.component.calcMethode
      }); 
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveComponent(): void{
    if(this.componentId != undefined){
      //Editing component
      let updatedComponent = this.componentForm.value;
      updatedComponent.id = this.componentId;
      this.componentService.updateComponent(updatedComponent as MyComponent)
      .subscribe(component => {
        this.onNoClick();
      });
    } else {
      // New component creation
      this.componentService.addComponent(this.componentForm.value as MyComponent)
      .subscribe(component => {
        this.onNoClick();
      });
    }
  }

 
  deleteComponent(): void{
    this.componentService.deleteComponent(this.componentId)
      .subscribe(component => {
        this.onNoClick();
      });
  }

}