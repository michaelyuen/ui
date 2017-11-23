import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mcy-icon',
	template: `
		<mat-icon>
			<ng-content></ng-content>
		</mat-icon>
	`
})
export class McyIconComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
