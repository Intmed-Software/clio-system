import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { PaginationComponent } from "./pagination.component";
import users from '../../assets/mocks/users';

export default {
    title: 'Pagination',
    component: PaginationComponent,

} as Meta;


const Template: Story<PaginationComponent> = (args: PaginationComponent) => ({
    props: args,
});

export const Primary = Template.bind({});


Primary.args = {
    currentPage: 0,
    list: users,
};
