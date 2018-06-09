import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../common/app.service';

@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule
    // MatCardModule
  ],
  providers: [AppService]
})
export class SharedModule { }
