import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'cs-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.sass']
})
export class SwitchComponent {

  @Input() model = false;
  @Output() modelChange = new EventEmitter<boolean>();

  handleChangeModel = () => this.modelChange.emit(!this.model);
}
