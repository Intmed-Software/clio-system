import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import Mock from '../../assets/mocks/users';
import { CircularProgressModule } from '../circular-progress/circular-progress.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/tables/table.component';
import { PaginationPipe } from './pipes/paginations.pipe';

const headers = [
	{ name: 'Name', key: 'name' },
	{ name: 'Email', key: 'email' },
	{ name: 'Last name', key: 'last_name' },
	{ name: 'Gender', key: 'gender' },
	{ name: 'ip address', key: 'ip_address' },
];

export default {
	component: TableComponent,
	decorators: [
		moduleMetadata({
			declarations: [TableComponent, PaginationComponent, PaginationPipe],
			imports: [CommonModule, CircularProgressModule],
		}),
	],
	title: 'Data grid',
} as Meta;

const Template: Story<TableComponent> = args => ({
	props: args
});

export const Default = Template.bind({});

Default.args = {
	headers,
	loading:false,
	rows:Mock,
	showPagination: true
};
