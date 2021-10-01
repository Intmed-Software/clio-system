import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { StoryBookTemplateComponent } from '../.story-book-template/story-book-template.component';


export default {
    title: 'Input',
    component: StoryBookTemplateComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                InputComponent
            ]
        })
    ]
} as Meta;

const api = `import { InputModule } from 'clio-system';`;

const Template: Story<StoryBookTemplateComponent> = (args: StoryBookTemplateComponent) => ({
    props: args,
    template: `
    <cs-story-book-template api="${api}">
        <div style="width:500px">
        Simple
            <cs-input placeholder="busque"></cs-input>
        </div>
        <div style="width:500px; margin-top:20px">
            Password
            <cs-input placeholder="busque" type="password"></cs-input>
        </div>
        <div style="width:200px; margin-top:20px">
            search
            <cs-input placeholder="busque" type="search"></cs-input>
        </div>
    </cs-story-book-template>
    `
});

export const Primary = Template.bind({});