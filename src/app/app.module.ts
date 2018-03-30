import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';

//Services
import { SongService } from './services/song.service';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
	],
		providers: [
		SongService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
