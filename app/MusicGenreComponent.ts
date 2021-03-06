/**
 * Created by nicojs on 6/2/2015.
 */
import {Component, View, NgFor} from 'angular2/angular2';
import ArtistComponent from 'ArtistComponent';
import MusicGenre from 'model/MusicGenre';

@Component({
    selector: 'music-genre',
    properties: [
        'genre: genre'
    ]
})
@View({
    template: `
        <div class="row">
        <h2>{{genre.name}}</h2>
        <div *ng-for="#artist of genre.artists" class="col-md-3">
            <artist [artist]="artist"></music-band>
        </div>
        </div>
    `,
    directives: [ArtistComponent, NgFor]
})
export default
class MusicGenreComponent {
    genre: MusicGenre;
}