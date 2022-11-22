import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'


const modules = [
  CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    ...modules
  ],
})
export class FormModule { }