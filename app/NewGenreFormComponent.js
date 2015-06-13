/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var MusicGenreService_1 = require('services/MusicGenreService');
var MusicGenre_1 = require('model/MusicGenre');
var NewGenreFormComponent = (function () {
    function NewGenreFormComponent(musicGenreService) {
        this.genres = musicGenreService.genres;
    }
    NewGenreFormComponent.prototype.add = function (input) {
        this.genres.push(new MusicGenre_1.default(input.value));
        input.value = '';
    };
    NewGenreFormComponent = __decorate([
        angular2_1.Component({
            selector: 'new-genre-form'
        }),
        angular2_1.View({
            template: "\n\t<div class=\"input-group\">\n    <input #new-genre-input type=\"text\" class=\"form-control input-lg\" placeholder=\"Add a music genre...\"> \n    <span class=\"input-group-btn\">\n    <button (click)=\"add(newGenreInput)\" class=\"btn btn-success btn-lg\" type=\"button\">\n    <i class=\"glyphicon glyphicon-plus\"></i></span>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [MusicGenreService_1.default])
    ], NewGenreFormComponent);
    return NewGenreFormComponent;
})();
exports.default = NewGenreFormComponent;
