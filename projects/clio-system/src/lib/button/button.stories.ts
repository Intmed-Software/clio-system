import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';


export default {
	component: ButtonComponent,
	decorators: [
		moduleMetadata({
			declarations: [ButtonComponent],
			imports: [CommonModule],
		}),
	],
	title: 'Button',
} as Meta;

const Template: Story<ButtonComponent> = args => ({
	props: args
});

export const Default = Template.bind({});
Default.args = {
	label: 'Main button'
};

export const Contained = Template.bind({});
Contained.args = {
	label: 'Contained',
	variant: 'contained'
};

export const Text = Template.bind({});
Text.args = {
	label: 'Text',
	variant: 'text'
};

export const Outlined = Template.bind({});
Outlined.args = {
	label: 'Outlined',
	variant: 'outlined'
};
