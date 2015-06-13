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
var TabsComponent = (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    TabsComponent.prototype.addTab = function (tabComponent) {
        this.tabs.push(tabComponent);
        return false;
    };
    TabsComponent.prototype.activateTab = function (tab) {
        this.tabs.forEach(function (t) { return t.isActive = false; });
        tab.isActive = true;
        return false;
    };
    TabsComponent = __decorate([
        angular2_1.Component({
            selector: 'tabs'
        }),
        angular2_1.View({
            template: "\n     <ul class=\"nav nav-tabs nav-justified\">\n        <li [class.active]=\"tab.isActive\" *ng-for=\"#tab of tabs\">\n            <a (click)=\"activateTab(tab)\" href=\"\">{{ tab.tabTitle }}</a>\n        </li>\n    </ul>\n    <content></content>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
})();
exports.default = TabsComponent;
