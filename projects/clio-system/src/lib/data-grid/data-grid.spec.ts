import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircularProgressModule } from '../circular-progress/circular-progress.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/tables/table.component';
import { PaginationPipe } from './pipes/paginations.pipe';

// const headers = [
// 	{ name: 'Name', key: 'name' },
// 	{ name: 'Email', key: 'email' },
// 	{ name: 'Last name', key: 'last_name' },
// 	{ name: 'Gender', key: 'gender' },
// 	{ name: 'ip address', key: 'ip_address' },
// ];

describe('DataGridComponent', () => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				TableComponent,
				PaginationComponent,
				PaginationPipe,
			],
			imports: [
				CommonModule,
				CircularProgressModule
			],
			providers: [
				PaginationPipe,
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// it('should show 10 item per page', ()=> {
	// 	component.itemsPerPage = 10;
	// 	component.headers = headers;
	// 	component.rows = Mock;
	// 	component.showPagination = true;
	// 	component.loading = false;
	// 	fixture.detectChanges();
	// 	const tableElement = fixture.debugElement.queryAll(By.css('td'));
	// 	expect(tableElement.length).toEqual(50);
	// });
});
