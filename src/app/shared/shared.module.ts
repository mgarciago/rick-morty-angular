import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterObjectPipe } from './pipes/filter-object.pipe';


const pipes = [FilterObjectPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedModule {}
