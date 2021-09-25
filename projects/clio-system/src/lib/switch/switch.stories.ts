import { Story, Meta } from '@storybook/angular/types-6-0';
import { SwitchComponent } from './switch.component';

export default {
    title: 'Switch',
    component: SwitchComponent,
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
    props: args,
});

export const Primary = Template.bind({});

Primary.args = {
    model: true,
};