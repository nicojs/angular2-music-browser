/**
 * Created by nicojs on 5/31/2015.
 */
import {Component, View, Parent} from 'angular2/angular2'
import TabsComponent from 'components/TabsComponent';

@Component({
    selector: 'tab',
    properties: {
        'tabTitle': 'tab-title'
    }
})
@View({
    template: `
    <div [hidden]="!isActive">    <content></content></div>
    `
})
export default
class TabComponent {

    isActive:boolean;

    constructor(@Parent() tabs:TabsComponent) {
        tabs.addTab(this);
    }
}