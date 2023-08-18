import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArrayFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
