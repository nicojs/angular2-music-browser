/// <reference path="../typings/angular2/angular2.d.ts" />
/**
 * Created by nicojs on 5/27/2015.
 */
import MusicGenre from 'model/MusicGenre';

export default class MusicGenreService {
    genres:Array<MusicGenre>;

    constructor() {
        this.genres = [new MusicGenre('Melodic death metal'), new MusicGenre('Powermetal')];
    }
    
}