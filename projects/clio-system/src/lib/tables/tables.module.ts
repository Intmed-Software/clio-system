import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationModule } from '../pagination/pagination.module';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginationPipe } from './pipes/paginations.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TablesComponent } from './tables.component';

@NgModule({
  declarations: [TablesComponent, FilterPipe, SortPipe, PaginationPipe],
  imports: [CommonModule, PaginationModule],
  exports: [TablesComponent, FilterPipe, SortPipe, PaginationPipe],
})
export class TablesModule {}
