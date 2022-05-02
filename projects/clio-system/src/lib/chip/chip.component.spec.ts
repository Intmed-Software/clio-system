import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from '../icon/icon.component';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
	let component: ChipComponent;
	let fixture: ComponentFixture<ChipComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ChipComponent, IconComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ChipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
 	expect(component).toBeTruthy();
	});

	it('Should show closeOption', ()=> {
		component.actionClose = true;
		fixture.detectChanges();
		const closeChipCase = fixture.debugElement.query(By.css('.close-icon'));
		expect(closeChipCase).not.toBeNull();
		component.actionClose = false;
		fixture.detectChanges();
		const simpleChipCase = fixture.debugElement.query(By.css('.close-icon'));
		expect(simpleChipCase).toBeNull();
	});

	it('Must be able to act upon clicking close button',  () => {
		component.actionClose = true;
		fixture.detectChanges();
		spyOn(component.onClose, 'emit');
		const closeChipCase = fixture.debugElement.query(By.css('.close-icon'));
		closeChipCase.nativeElement.click();
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(component.onClose.emit).toHaveBeenCalled();
	});
});

