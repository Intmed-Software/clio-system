import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircularProgressModule } from '../circular-progress/circular-progress.module';
import { IconModule } from '../icon/icon.module';
import { ButtonComponent } from './button.component';

@NgModule({
	declarations: [
		ButtonComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		CircularProgressModule
	],
	exports: [
		ButtonComponent
	]
})
export class ButtonModule { }
