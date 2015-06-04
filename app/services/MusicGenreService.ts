/// <reference path="../typings/angular2/angular2.d.ts" />
/**
 * Created by nicojs on 5/27/2015.
 */
import MusicGenre from 'model/MusicGenre';
import {Observable} from 'angular2/angular2';

export default class MusicGenreService {
    genres:Observable<Array<MusicGenre>>;

    constructor() {
        this.genres = [new MusicGenre('Melodic death metal'), new MusicGenre('Powermetal')];
    }

}