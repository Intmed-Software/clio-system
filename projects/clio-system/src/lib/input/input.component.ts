import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'cs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit{
  
  @Input() model? = '';
  @Input() type?: string;
  @Input() name?: string;
  @Input() placeholder?: string;

  @Output() modelChange = new EventEmitter<any>();
  @Output() onKeyPress = new EventEmitter<any>();

  passwordHidden = true;

  ngOnInit() {}

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
    return this.type == 'search';
  }

  get searchIcon() {
    return this.model === '' &&  this.showSearchIcon ?  'search' : 'close'
  }

  get passwordMode() {
    return this.type === 'password';
  }

  get showPasswordIcon() {
    return this.passwordHidden ? 'visibility' : 'visibility_off';
  }
}
