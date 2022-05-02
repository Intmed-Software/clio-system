import {
	Component,
	EventEmitter,
	Input, Output,
	ViewEncapsulation
} from '@angular/core';
import { BooleanInput } from '../../utils/boolean-Input';
import { ColorProps, VariantProps } from './types_d';

@Component({
	selector: 'clio-chip',
	templateUrl: './chip.component.html',
	styleUrls: ['./chip.component.sass'],
	encapsulation: ViewEncapsulation.None,
})
export class ChipComponent {
  @Input() @BooleanInput() actionClose: any;
  @Input() variant: VariantProps = 'contained';
  @Input() label: string | undefined;
  @Input() dark = true;
  @Input() color: ColorProps = 'primary';
  @Input() customClass: string | undefined;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();

  get className() {
  	const createClass = (): string => {
  		const type = this.variant === 'outlined' ? null : this.dark ? 'dark' : 'light';
  		const cls: any[] = [this.variant, this.color];
  		if (type) {
  			cls.push(type);
  		}
  		return 'chip ' + cls.join('-');
  	};
  	return this.customClass ?  `chip ${this.customClass}` : createClass();
  }

  onHandleClickClose() {
  	if(this.actionClose) {
	  this.onClose.emit({});
  	}
  }
}
