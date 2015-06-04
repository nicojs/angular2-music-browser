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
var MusicBandComponent_1 = require('MusicBandComponent');
var MusicGenreComponent = (function () {
    function MusicGenreComponent() {
    }
    MusicGenreComponent = __decorate([
        angular2_1.Component({
            selector: 'music-genre',
            properties: {
                genre: 'genre'
            }
        }),
        angular2_1.View({
            template: "\n        <div class=\"row\">\n        <h2>{{genre.name}}</h2>\n        <div *for=\"#band of genre.bands\" class=\"col-md-3\">\n        {{band}}\n        </div>\n        </div>\n    ",
            directives: [MusicBandComponent_1.default, angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], MusicGenreComponent);
    return MusicGenreComponent;
})();
exports.default = MusicGenreComponent;
