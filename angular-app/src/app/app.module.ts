import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogOverviewExampleDialog } from './app.component';
import { EcoreImportDialog } from './app.component';
import { RuntimeContentComponent } from './runtime-content.component';

import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HtmlsourceService} from "./htmlsource.service";




@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    EcoreImportDialog,
    RuntimeContentComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    EcoreImportDialog
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,

    BrowserAnimationsModule
  ],
  providers: [HtmlsourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
