import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';

//Services
import { SongService } from './services/song.service';
import { AdminComponent } from './admin/admin.component';
import { SingerComponent } from './singer/singer.component';


@NgModule({
	declarations: [
		AppComponent,
		AdminComponent,
		SingerComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
        AppRoutingModule,
	],
		providers: [
		SongService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
