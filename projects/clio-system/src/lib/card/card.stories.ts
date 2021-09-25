import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { CardComponent } from "./card.component";

export default {
    title: 'Card',
    component: CardComponent,
    decorators: [
        componentWrapperDecorator(CardComponent)
    ]
} as Meta;


const Template: Story<CardComponent> = (args: CardComponent) => ({
    template: `{{ cardValue }}`,
    props: args,
});

export const Primary = Template.bind({});

const lorem = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;
Primary.args = {
    cardValue: lorem,
};
