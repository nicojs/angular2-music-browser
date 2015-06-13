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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var MusicGenre_1 = require('model/MusicGenre');
var MusicGenreService_1 = require('services/MusicGenreService');
var TabsComponent_1 = require('components/TabsComponent');
var TabComponent_1 = require('components/TabComponent');
var MusicGenreComponent_1 = require('MusicGenreComponent');
var NewGenreFormComponent_1 = require('NewGenreFormComponent');
var MusicBrowserComponent = (function () {
    function MusicBrowserComponent(musicGenreService) {
        this.genres = musicGenreService.genres;
    }
    MusicBrowserComponent.prototype.activateGenre = function (genre) {
        this.genres.forEach(function (genre) { return genre.isActive = false; });
        genre.isActive = true;
        return false;
    };
    MusicBrowserComponent.prototype.addGenre = function (name) {
        this.genres.push(new MusicGenre_1.default(name));
    };
    MusicBrowserComponent = __decorate([
        angular2_1.Component({
            selector: 'music-browser',
            appInjector: [MusicGenreService_1.default]
        }),
        angular2_1.View({
            template: "\n    <div class=\"jumbotron\">\n    <h1>Welcome to the music browser</h1>\n    <p>Using AngularJS2 to crawl the spotify api</p>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-12\">\n        <new-genre-form />\n    </div>\n    </div>\n    <tabs>\n        <tab *ng-for=\"#genre of genres\" [tab-title]=\"genre.name + ' (' + genre.artistCount + ')'\">\n            <music-genre [genre]=\"genre\"></music-genre>\n        </tab>\n    </tabs>\n    ",
            directives: [TabsComponent_1.default, TabComponent_1.default, angular2_1.NgFor, MusicGenreComponent_1.default, NewGenreFormComponent_1.default]
        }), 
        __metadata('design:paramtypes', [MusicGenreService_1.default])
    ], MusicBrowserComponent);
    return MusicBrowserComponent;
})();
angular2_1.bootstrap(MusicBrowserComponent);
