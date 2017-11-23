import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { McyIconComponent } from './icon.component';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule
	],
	declarations: [McyIconComponent],
	exports: [McyIconComponent]
})
export class McyIconModule { }
