import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterObjectPipe } from './pipes/filter-object.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { CharactersService } from './services/characters.service';

const pipes = [FilterObjectPipe, PaginationPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedModule {}
