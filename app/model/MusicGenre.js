var ArtistService_1 = require('services/ArtistService');
var Artist_1 = require('model/Artist');
var MusicGenre = (function () {
    function MusicGenre(name) {
        this.name = name;
        this.artists = [];
        this.bootstrapArtists();
    }
    MusicGenre.prototype.bootstrapArtists = function () {
        var _this = this;
        ArtistService_1.default.getByGenre(this.name).then(function (artistsResponse) { return _this.fillArtists(artistsResponse); });
    };
    MusicGenre.prototype.fillArtists = function (artistsResponse) {
        var _this = this;
        this.artistCount = artistsResponse.total;
        artistsResponse.items.forEach(function (artistJson) { return _this.artists.push(new Artist_1.default(artistJson)); });
    };
    return MusicGenre;
})();
exports.default = MusicGenre;
