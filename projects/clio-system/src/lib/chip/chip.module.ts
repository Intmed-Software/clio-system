import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { ChipComponent } from './chip.component';

@NgModule({
	declarations: [ChipComponent],
	imports: [CommonModule, IconModule],
	exports: [ChipComponent],
})
export class ChipModule {}
