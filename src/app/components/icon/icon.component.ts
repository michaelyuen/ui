import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-icon',
	template: `
		<mat-icon>
			<ng-content></ng-content>
		</mat-icon>
	`
})
export class IconComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
