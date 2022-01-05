import { Component, Input, Output, EventEmitter, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'cs-input',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {

  @Input() model = '';
  @Input() type?: string;
  @Input() name = '';
  @Input() placeholder?: string;
  @Input() disabled = false;
  @Output() modelChange = new EventEmitter<any>();
  @Output() onKeyPress = new EventEmitter<any>();

  passwordHidden = true;

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() { }

  public handleChangeModel(event: any) {
    this.modelChange.emit(event.target.value);
    this.onKeyPress.emit();
  };

  clearModel() {
    this.model = '';
    this.modelChange.emit(this.model);
    this.onKeyPress.emit();
  }

  onHandlechangeHiddenPassword = () => this.passwordHidden = !this.passwordHidden;
  
  /* ControlValueAccessor functions*/

  writeValue(value: any) {
    this.model = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  get showSearchIcon() {
    return this.type == 'search';
  }

  get searchIcon() {
    return this.model === '' && this.showSearchIcon ? 'search' : 'close';
  }

  get passwordMode() {
    return this.type === 'password';
  }

  get showPasswordIcon() {
    return this.passwordHidden ? 'visibility' : 'visibility_off';
  }
}
