import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownButtonsComponent } from './dropdown-buttons.component';

describe('DropdownButtonsComponent', () => {
	let component: DropdownButtonsComponent;
	let fixture: ComponentFixture<DropdownButtonsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DropdownButtonsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownButtonsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
