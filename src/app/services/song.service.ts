import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SongService {

	constructor(
		private http: HttpClient,
	) { }

	search(terms: Observable<string>) {
		return terms.debounceTime(400)
		.distinctUntilChanged()
		.switchMap(term => this.debounceAction(term));
	}

	debounceAction(term) {
		return this.searchSongs(term);
	}

	searchSongs(term = null): Observable<any> {
		console.log('search for ' + term);
		return this.http.get('http://kdjgo.com/api/search.php?term=' + term);
	}

}
