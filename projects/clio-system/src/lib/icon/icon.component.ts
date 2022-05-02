import { Component, Input } from '@angular/core';

@Component({
	selector: 'clio-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass']
})
export class IconComponent {
	@Input() size = 24;

	sizeProperties() {
 	return {
			'font-size': this.size + 'px'
		};
	}
}
