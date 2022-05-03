import { componentWrapperDecorator, Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';


export default {
	title: 'Icon',
	component: IconComponent,
	decorators: [
		componentWrapperDecorator(IconComponent)
	]
} as Meta;


export const WithTemplate = (args: IconComponent) => ({
	// eslint-disable-next-line quotes
	template: `{{ buttonValue }}`,
	props: {
		...args
	},
});

export const Primary = WithTemplate.bind({});
