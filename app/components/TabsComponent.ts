/**
 * Created by nicojs on 5/31/2015.
 */
import {Component, View, NgFor as For} from 'angular2/angular2';
import TabComponent from 'components/TabComponent';

@Component({
    selector: 'tabs'
})
@View({
    template: `
     <ul class="nav nav-tabs nav-justified">
        <li [class.active]="tab.isActive" *ng-for="#tab of tabs">
            <a (click)="activateTab(tab)" href="">{{ tab.tabTitle }}</a>
        </li>
    </ul>
    <content></content>
  `,
    directives: [For]
})

export default
class TabsComponent {
    tabs:Array<TabComponent>;

    constructor() {
        this.tabs = [];
    }

    addTab(tabComponent:TabComponent) {
        this.tabs.push(tabComponent);
        return false;
    }

    activateTab(tab: TabComponent){
        this.tabs.forEach(t => t.isActive = false);
        tab.isActive = true;
        return false;
    }
}