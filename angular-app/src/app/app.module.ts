import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogOverviewExampleDialog } from './app.component';

import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
