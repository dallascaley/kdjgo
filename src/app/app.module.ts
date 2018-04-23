import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule, AlertModule } from 'ngx-bootstrap';  //This is an example from ngx bootstrap doc, probably not actually needed (yet)

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
        AlertModule.forRoot(), //ditto bootstrap example
        ModalModule.forRoot(),
	],
		providers: [
		SongService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
