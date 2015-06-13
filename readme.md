Angular 2 music browser
=======================
*Using angular 2 with Typescript to call the Spotify api*

Getting started
----
Execute the following commands to get started.
```
git clone git@github.com:nicojs/angular2-music-browser.git
cd angular2-music-browser
npm install -g bower live-server tsc
bower install
cd app
tsc -w & live-server
```
I found live-server an excalent tool to have a simple live reload server for development.
The typescript compile command (tsc -w) will start the typescript compiler. It will watch for any file changes (-w). Also, it will use the tsconfig.json file to read the rest of the config. 

What's this about
----
This is an example project to see angular2 in action. As of now, angular2 is still in its alpha stage. So no guarantees. The api WILL change.
I tried to make a 'real' app. With a small form, an api call and some html happiness.


Furter readings
----
I found these resources particular useful:
* [Official angular website](http://angular.io)
* [Why will angular 2 rock](http://angular-tips.com/blog/2015/06/why-will-angular-2-rock/)
* [Change detection](http://victorsavkin.com/post/110170125256/change-detection-in-angular-2)
* [Zone.js](https://github.com/btford/zone.js/)
