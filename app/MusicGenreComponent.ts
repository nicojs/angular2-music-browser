/**
 * Created by nicojs on 6/2/2015.
 */
import {Component, View, For} from 'angular2/angular2';
import MusicBandComponent from 'MusicBandComponent';
import MusicGenre from 'model/MusicGenre';

@Component({
    selector: 'music-genre',
    properties:{
        genre: 'genre'
    }
})
@View({
    template: `
        <div class="row">
        <h2>{{genre.name}}</h2>
        <div *for="#artist of genre.artists" class="col-md-3">
            <music-band [artist]="artist"></music-band>
        </div>
        </div>
    `,
    directives: [MusicBandComponent, For]
})
export default
class MusicGenreComponent {
    genre: MusicGenre;
    constructor(){
        console.log(this.genre);
    }
}