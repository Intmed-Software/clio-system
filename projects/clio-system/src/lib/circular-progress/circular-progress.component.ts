import { Component, Input } from '@angular/core';


@Component({
	selector: 'clio-circular-progress',
	templateUrl: './circular-progress.component.html',
	styleUrls: ['./circular-progress.component.sass']
})
export class CircularProgressComponent {

  @Input() size: string | number = '20';

  get loaderSize() {
  	return `${this.size}px`;
  }
}
