import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {HttpClientModule } from '@angular/common/http';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavContentComponent } from './nav-content/nav-content.component';
import { ComponentSettingsDialogComponent } from './component-settings-dialog/component-settings-dialog.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ComponentService } from './component.service';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavContentComponent,
    ComponentSettingsDialogComponent,
    GeneralSettingsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MDBBootstrapModule.forRoot()
  ],
  providers: [ComponentService],
  entryComponents: [ComponentSettingsDialogComponent],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
