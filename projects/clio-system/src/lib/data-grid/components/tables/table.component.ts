import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BooleanInput } from '../../../../utils/boolean-Input';
import { HeaderProps } from './types_d';

@Component({
	selector: 'clio-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.sass'],
	encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  @Input() messageOnEmptylist? = 'Nenhum resultado buscado ou encontrado';
  @Input() rowsTemplate: any;
  @Input() headers: HeaderProps[] = [];
  @Input() rows: any[] = [];
  @Input() loading = false;
  @Input() itemsPerPage = 10;
  @Input() @BooleanInput() showPagination: any;

  currentPage = 0;
 	get isEmpt() {
  	return !!!this.rows.length;
  }

  treatsValue(val: any) {
  	return typeof val === 'number' || typeof val === 'string'
  		? val
  		: JSON.stringify(val);
  }
}

