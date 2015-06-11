/**
 * Created by nicojs on 5/28/2015.
 */
var ArtistService = (function () {
    function ArtistService() {
    }
    ArtistService.prototype.getByGenre = function (genre) {
        genre = window['encodeURIComponent'](genre);
        return window['Zone'].bindPromiseFn(window['fetch'])("https://api.spotify.com/v1/search?q=genre:%22" + genre + "%22&type=artist")
            .then(function (response) { return response.json(); })
            .then(function (artistResponseJson) { return artistResponseJson.artists; })
            .then(function (artistResponse) { console.log(artistResponse); return artistResponse; });
    };
    return ArtistService;
})();
exports.default = new ArtistService();
