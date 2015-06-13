/**
 * Created by nicojs on 6/2/2015.
 */
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
var ArtistComponent = (function () {
    function ArtistComponent() {
    }
    ArtistComponent = __decorate([
        angular2_1.Component({
            selector: 'artist',
            properties: [
                'artist: artist'
            ]
        }),
        angular2_1.View({
            template: "<div>\n        <a target=\"_blank\" [href]=\"artist.url\">\n        <h3>{{artist.name}}</h3>\n        <img class=\"img-responsive\" [src]=\"artist.imageUrl\">\n        </a>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ArtistComponent);
    return ArtistComponent;
})();
exports.default = ArtistComponent;
