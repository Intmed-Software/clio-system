import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconModule } from '../icon/icon.module';
import { ChipComponent } from './chip.component';

export default {
	component: ChipComponent,
	decorators: [
		moduleMetadata({
			declarations: [ChipComponent],
			imports: [CommonModule, IconModule],
		}),
	],
	title: 'Chip',
} as Meta;

const Template: Story<ChipComponent> = args => ({
	props: args
});

export const Primary = Template.bind({});
Primary.args = {
	label: 'chip content',
	color: 'primary'
};

export const Warning = Template.bind({});
Warning.args = {
	label: 'chip content',
	color: 'warning'
};

export const Error = Template.bind({});
Error.args = {
	label: 'chip content',
	color: 'error'
};

export const ActionClose = Template.bind({});
ActionClose.args = {
	label: 'chip content',
	color: 'primary',
	actionClose: true
};
