import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'clio-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {

  @Input() itemsPerPage = 10;
  @Input() currentPage = 0;
  @Output() currentPageChange = new EventEmitter<number>();


  @Input() list: Array<any> = [];

  get nRows() {
  	return this.list.length;
  }

  get nPages() {
  	return Math.floor(this.nRows / this.itemsPerPage);
  }

  get optionPages() {
  	return Array(this.nPages).fill(1).map((x, i) => i);
  }

  handleChangeCurrentPage = () => this.currentPageChange.emit(this.currentPage);

  previous() {
  	if (this.currentPage > 0) {
  		this.currentPage--;
  		this.handleChangeCurrentPage();
  	}
  }
  next() {
  	if (this.currentPage < this.nPages - 1) {
  		{this.currentPage++;}
  	}
  	this.handleChangeCurrentPage();
  }

  setSelectionPage(event: any) {
  	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  	this.currentPage = parseInt(event.target.value);
  	this.handleChangeCurrentPage();
  }
}
