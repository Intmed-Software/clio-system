import { Meta, moduleMetadata, Story } from '@storybook/angular';
import users from '../../assets/mocks/users';
import { TextFieldModule } from '../text-field/text-field.module';
import { PaginationModule } from '../pagination/pagination.module';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginationPipe } from './pipes/paginations.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TablesComponent } from "./tables.component";

export default {
    title: 'Tables',
    component: TablesComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                FilterPipe,
                SortPipe,
                PaginationPipe
            ],
            imports: [
                PaginationModule,
                TextFieldModule
            ]
        }),
    ]
} as Meta;


const Template: Story<TablesComponent> = (args: TablesComponent) => ({
    props: args,
});

export const Primary = Template.bind({});

const headers = [
    { name: 'ID', key: 'id', sortble: true },
    { name: 'Nome', key: 'name', sortble: true },
    { name: 'Email', key: 'email', sortble: true },
    { name: 'ip Address' , key: 'ip_address'},
];

Primary.args = {
    search: '',
    headers,
    paginate: '',
    rows: users,
};
