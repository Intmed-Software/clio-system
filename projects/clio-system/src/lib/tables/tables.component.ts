import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeaders, IPipeOrder } from './types_d';


@Component({
  selector: 'cs-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.sass']
})

export class TablesComponent {

  @Input() rowsTemplate: any;

  @Input() search?: string;

  @Input() paginate?: string;

  @Output() searchChange = new EventEmitter<any>();

  @Output() onSearch = new EventEmitter<any>();

  @Input() headers: IHeaders[] = [];
  @Input() rows: Array<any> = [];

  selectedColum: IPipeOrder = {
    key: 'id',
    ordering: 'desc'
  };

  currentPage = 0;
  itemsPerPage = 10;

  handleSelectColum({ key, sortble }: IHeaders) {

    if (key && sortble)
      this.selectedColum = {
        key,
        ordering: this.selectedColum.ordering === 'desc' ? 'asc' : 'desc'
      };
  }

  sortbleTeme({ sortble }: IHeaders) {
    return {
      'cs-colum-sortble': sortble
    };
  }

  get showPagination() {
    return this.paginate !== undefined;
  }

  handleChangeSearchModel = () => {
    this.searchChange.emit(this.search);
    this.onSearch.emit();
  };

}
