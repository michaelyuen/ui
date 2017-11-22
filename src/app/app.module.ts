import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconModule } from './components/icon/icon.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		IconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
