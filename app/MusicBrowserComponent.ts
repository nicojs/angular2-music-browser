/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import MusicGenre from 'model/MusicGenre';
import MusicGenreService from 'services/MusicGenreService';
import TabsComponent from 'components/TabsComponent';
import TabComponent from 'components/TabComponent';
import MusicGenreComponent from 'MusicGenreComponent';
import NewGenreFormComponent from 'NewGenreFormComponent';


// Annotation section
@Component({
    selector: 'music-browser',
    appInjector: [MusicGenreService]
})
@View({
    template: `
    <div class="jumbotron">
    <h1>Welcome to the music browser</h1>
    <p>Using AngularJS2 to crawl the spotify api</p>
    </div>
    <div class="row">
    <div class="col-md-12">
        <new-genre-form />
    </div>
    </div>
    <tabs>
        <tab *ng-for="#genre of genres" [tab-title]="genre.name + ' (' + genre.artistCount + ')'">
            <music-genre [genre]="genre"></music-genre>
        </tab>
    </tabs>
    `,
    directives: [TabsComponent, TabComponent, NgFor, MusicGenreComponent, NewGenreFormComponent]
})
class MusicBrowserComponent {
    genres:Array<MusicGenre>;

    constructor(musicGenreService: MusicGenreService) {
        this.genres = musicGenreService.genres;
    }

    activateGenre(genre: MusicGenre){
        this.genres.forEach(genre => genre.isActive = false);
        genre.isActive = true;
        return false;
    }
    
    addGenre(name: string){
        this.genres.push(new MusicGenre(name));
    }
}

bootstrap(MusicBrowserComponent);
