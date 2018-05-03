import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSettingsDialogComponent } from './component-settings-dialog.component';

describe('ComponentSettingsDialogComponent', () => {
  let component: ComponentSettingsDialogComponent;
  let fixture: ComponentFixture<ComponentSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
