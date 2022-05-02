import { Component, Input, OnInit } from '@angular/core';
import { BooleanInput } from '../../utils/boolean-Input';
import { SizeProps, VariantProps } from './types_d';


@Component({
	selector: 'clio-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  @Input() variant: VariantProps | undefined;
  @Input() size: SizeProps = 'medium';
  @Input() @BooleanInput() fullWidth: any;
  @Input() @BooleanInput() loading = false;
  @Input() disabled = false;
  @Input() type = 'button';
  @Input() label: string | undefined;
  @Input() buttonIcon: string | undefined;


  get iconSize() {
  	switch (this.size) {
   	case 'medium':
  		return 14;
  	case 'small':
  		return 12;
  	case 'large':
  		return 24;
  	default:
  		return 14;
  	}
  }

  get buttonClassAttributs() {
  	return {
  		fullWidth: this.fullWidth,
  		text: this.variant === 'text',
  		outlined: this.variant === 'outlined',
  		contained: this.variant === 'contained',
  		'size-small': this.size === 'small',
  		'size-medium': this.size === 'medium',
  	};
  }

  get loadingCase() {
  	return {
  		hideContainer: this.loading
  	};
  }

  ngOnInit(): void {}
}
