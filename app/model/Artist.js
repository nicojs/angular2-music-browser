/**
 * Created by nicojs on 5/28/2015.
 */
var Artist = (function () {
    function Artist(json) {
        this.url = json.external_urls.spotify;
        this.name = json.name;
        this.imageUrl = json.images[0]['url'];
        this.thumbUrl = json.images[json.images.length - 1]['url'];
    }
    return Artist;
})();
exports.default = Artist;
