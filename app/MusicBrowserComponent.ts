/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import MusicGenre from 'model/MusicGenre';
import MusicGenreService from 'services/MusicGenreService';
import TabsComponent from 'components/TabsComponent';
import TabComponent from 'components/TabComponent';
import MusicGenreComponent from 'MusicGenreComponent';


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
    <div class="input-group">
    <input #new-genre-input (keyup) type="text" class="form-control input-lg" placeholder="Add a music genre..."> 
    <span class="input-group-btn">
    <button (click)="addGenre(newGenreInput.value)" class="btn btn-success btn-lg" type="button">
    <i class="glyphicon glyphicon-plus"></i></span>
    </div>
    </div>
    </div>
    <tabs>
        <tab *ng-for="#genre of genres" [tab-title]="genre.name + ' (' + genre.artistCount + ')'">
            <music-genre [genre]="genre"></music-genre>
        </tab>
    </tabs>
    `,
    directives: [TabsComponent, TabComponent, NgFor, MusicGenreComponent]
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
    
    addGenre(name: string){
        this.genres.push(new MusicGenre(name));
    }
}

bootstrap(MetalBrowserComponent);
