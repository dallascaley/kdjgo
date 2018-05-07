import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
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
    selectedSong: any = false;

    modalRef: BsModalRef;

    songTerm$ = new Subject<string>();

    constructor(
        private songService: SongService,
        private modalService: BsModalService,
    ) {
        this.songService.search(this.songTerm$).subscribe(songs => { 
            console.log('songs returned');
            console.log(songs);
            this.songs = songs;
        });
    }

    ngOnInit() { }

    openModal(template: TemplateRef<any>, song) {
        this.selectedSong = song;
        this.modalRef = this.modalService.show(template);
    }

    selectSong(song) {
        this.selectedSong = song;
    }

    singIt() {
        this.modalRef.hide();
    }
}
