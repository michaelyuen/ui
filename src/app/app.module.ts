import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { McyIconModule } from './components/icon/icon.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		McyIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
