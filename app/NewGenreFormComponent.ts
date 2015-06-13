/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import MusicGenreService from 'services/MusicGenreService';
import MusicGenre from 'model/MusicGenre';

@Component({
	selector: 'new-genre-form'
})
@View({
	template: `
	<div class="input-group">
    <input #new-genre-input type="text" class="form-control input-lg" placeholder="Add a music genre..."> 
    <span class="input-group-btn">
    <button (click)="add(newGenreInput)" class="btn btn-success btn-lg" type="button">
    <i class="glyphicon glyphicon-plus"></i></span>
    </div>
	`
})
export default class NewGenreFormComponent{
	genres: Array<MusicGenre>;
	constructor(musicGenreService: MusicGenreService){
		this.genres = musicGenreService.genres;
	}
	
    add(input){
        this.genres.push(new MusicGenre(input.value));
		input.value = '';
    }
}