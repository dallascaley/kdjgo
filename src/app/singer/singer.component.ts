import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SongService } from './../services/song.service';

@Component({
    selector: 'app-singer',
    templateUrl: './singer.component.html',
    styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
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

    ngOnInit() { }
}
