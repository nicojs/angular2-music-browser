/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';
import MusicGenre from 'model/MusicGenre';
import MusicGenreService from 'services/MusicGenreService';
import TabsComponent from 'components/TabsComponent';
import TabComponent from 'components/TabComponent';
import MusicGenreComponent from 'MusicGenreComponent';


// Annotation section
@Component({
    selector: 'music-browser',
    injectables: [MusicGenreService]
})
@View({
    template: `
    <div class="jumbotron">
    <h1>Welcome to the music browser</h1>
    <p>Using AngularJS2 to crawl the spotify api</p>
    </div>
    <tabs>
        <tab *for="#genre of genres" [tab-title]="genre.name + ' (' + genre.artists.length + ')'">
            <music-genre [genre]="genre"></music-genre>
        </tab>
    </tabs>
    `,
    directives: [TabsComponent, TabComponent, For, MusicGenreComponent]
})
class MetalBrowserComponent {
    genres:Array<MusicGenre>;

    constructor(musicGenreService: MusicGenreService) {
        this.genres = musicGenreService.genres;
    }

    activateGenre(genre: MusicGenre){
        this.genres.forEach(genre => genre.isActive = false);
        genre.isActive = true;
        return false;
    }
}

bootstrap(MetalBrowserComponent);
