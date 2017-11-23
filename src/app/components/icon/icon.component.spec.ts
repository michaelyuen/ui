import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McyIconComponent } from './icon.component';

describe('IconComponent', () => {
	let component: McyIconComponent;
	let fixture: ComponentFixture<McyIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ McyIconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(McyIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
