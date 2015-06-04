/// <reference path="../typings/angular2/angular2.d.ts" />
var MusicGenre_1 = require('model/MusicGenre');
var MusicGenreService = (function () {
    function MusicGenreService() {
        this.genres = [new MusicGenre_1.default('Melodic death metal'), new MusicGenre_1.default('Powermetal')];
    }
    return MusicGenreService;
})();
exports.default = MusicGenreService;
