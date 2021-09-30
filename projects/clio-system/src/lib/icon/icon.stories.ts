import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { IconComponent } from "./icon.component";

export default {
    title: 'Icon',
    component: IconComponent,
    decorators: [
        componentWrapperDecorator(IconComponent)
    ]
} as Meta;


const Template: Story<IconComponent> = (args: IconComponent) => ({
    template: `{{ iconName }}`,
    props: args,
});

export const Primary = Template.bind({});

Primary.args = {
    iconName: `location_off`,
};
