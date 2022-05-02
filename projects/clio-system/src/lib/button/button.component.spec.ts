import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CircularProgressComponent } from '../circular-progress/circular-progress.component';
import { CircularProgressModule } from '../circular-progress/circular-progress.module';
import { ButtonComponent } from './button.component';

describe('MainButtonComponent', () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;
	let submitEl: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ButtonComponent ,
				CircularProgressComponent
			],
			imports: [
				CircularProgressModule
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		submitEl = fixture.debugElement.query(By.css('button'));
	});

	it('should create', () => {
 	expect(component).toBeTruthy();
	});

	it('should set content', () => {
		component.label = 'enviar';
		fixture.detectChanges();
		const content = fixture.debugElement.query(By.css('#simple-button-content'));
		const contentloadind = fixture.debugElement.query(By.css('#loading-button-content'));
		expect(content.nativeNode.innerHTML.trim()).toEqual('enviar');
		expect(contentloadind).toBeNull();
	});

	it ('should be loading', () => {
		component.loading = true;
		fixture.detectChanges();
		const contentLoading = fixture.debugElement.query(By.css('#loading-button-content'));
		expect(submitEl.nativeElement.disabled).toBeTruthy();
		expect(contentLoading).not.toBeNull();
	});
});


/** Test component that contains an ClioButton. */
@Component({
	template: `
			<clio-button (click)="onClick()">
			{{ eventReference }}
			</clio-button>
		`
})
export class TestButtonComponent {
	eventReference = 'unclicked';
	onClick = () =>	this.eventReference = 'clicked';
}

describe('TestButtonComponent', () => {
	let fixture: ComponentFixture<TestButtonComponent>;
	let submitEl: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ButtonComponent, CircularProgressComponent, TestButtonComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestButtonComponent);
		fixture.detectChanges();
		submitEl = fixture.debugElement.query(By.css('button'));
	});

	it ('shoud be clickble',  () => {
		submitEl.nativeElement.click();
		fixture.detectChanges();
		expect(submitEl.nativeElement.innerText).toEqual('clicked');
	});

	it ('shoud be not clickble',  () => {
		submitEl.nativeElement.disabled = true;
		fixture.detectChanges();
		submitEl.nativeElement.click();
		fixture.detectChanges();
		expect(submitEl.nativeElement.innerText).not.toEqual('clicked');
	});
});
