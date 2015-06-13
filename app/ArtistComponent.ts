/**
 * Created by nicojs on 6/2/2015.
 */

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'artist',
    properties: [
        'artist: artist'
    ]
})
@View({
    template:`<div>
        <h3>{{artist.name}}</h3>
        <img class="img-responsive" [src]="artist.imageUrl">
    </div>`
})
export default
class ArtistComponent {
}