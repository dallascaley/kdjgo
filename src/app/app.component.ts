import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SongService } from './services/song.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'kDJgo';
	search: any = '';
    songs: any = [];

	songTerm$ = new Subject<string>();

	constructor(
	private songService: SongService,
	) {
		this.songService.search(this.songTerm$).subscribe(songs => { 
			console.log('songs returned');
			console.log(songs);
            this.songs = songs;
		});
	}
}
