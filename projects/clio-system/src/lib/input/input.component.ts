import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'cs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit{
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() name?: string;

  @Input() model?: string;
  @Output() modelChange = new EventEmitter<any>();
  @Output() onKeyPress = new EventEmitter<any>();

  passwordHidden = true;

  ngOnInit() {
    console.log(this.model)
  }

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

  get showSearchIcon() {
    return this.model === '' && this.type == 'search';
  }

  get showClearIcon() {
    return this.model !== '' && this.type == 'search';
  }

  get passwordMode() {
    return this.type === 'password';
  }

  get showPasswordIcon() {
    return this.passwordHidden ? 'visibility' : 'visibility_off';
  }
}