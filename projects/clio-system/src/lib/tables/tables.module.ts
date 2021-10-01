import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PaginationPipe } from './pipes/paginations.pipe';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    TablesComponent,
    FilterPipe,
    SortPipe,
    PaginationPipe,
  ],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [
    TablesComponent,
    FilterPipe,
    SortPipe,
    PaginationPipe
  ]
})
export class TablesModule { }