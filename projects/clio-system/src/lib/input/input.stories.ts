import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { InputModule } from './input.module';
import { CommonModule } from '@angular/common';

export default {
    title: 'Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            declarations: [
              
            ],
            imports: [
                InputModule,
                CommonModule
            ]
        })
    ]
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
    props: args,
    template: `<cs-input placeholder="busque" type="password"></cs-input>`
});

export const Primary = Template.bind({});
