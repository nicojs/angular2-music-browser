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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var TabsComponent_1 = require('components/TabsComponent');
var TabComponent = (function () {
    function TabComponent(tabs) {
        tabs.addTab(this);
    }
    TabComponent = __decorate([
        angular2_1.Component({
            selector: 'tab',
            properties: {
                'tabTitle': 'tab-title'
            }
        }),
        angular2_1.View({
            template: "\n    <div [hidden]=\"!isActive\">    <content></content></div>\n    "
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [TabsComponent_1.default])
    ], TabComponent);
    return TabComponent;
})();
exports.default = TabComponent;
