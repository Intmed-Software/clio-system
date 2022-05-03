import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircularProgressModule } from '../circular-progress/circular-progress.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/tables/table.component';
import { PaginationPipe } from './pipes/paginations.pipe';

@NgModule({
	declarations: [
		TableComponent,
		PaginationComponent,
		PaginationPipe,
	],
	imports: [
		CommonModule,
		CircularProgressModule
	],
	exports:[
		TableComponent,
		PaginationComponent,
		PaginationPipe
	]
})
export class DataGridModule { }
