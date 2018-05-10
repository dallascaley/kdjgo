import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {

    constructor(
        private http: HttpClient,
    ) { }

    getLocations(): Observable<any> {
        return this.http.get('http://kdjgo.com/api/get_locations.php');
    }

}
