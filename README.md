# Boilerplate Es6 Angular Webpack

This is a starter kit to get you working with es6 classes and modules within Angular using Webpack.

##Basic Setup

1. run `git clone https://github.com/nearbycoder/boilerplate-es6-angular-webpack.git`
2. run `npm install` within the directory the repo is located
3. run 'npm start' this will start webpack-dev-server on port 8080
4. From there the root of the app is `/src/app/app.js`

Take note: I have created a example component called home. This wil show you how to use es6 imports with angular to create a folder module structure for your components.

##Build Production

run `npm run build`

Take note: this will extract everything into the `./dist` folder as well as, dedupe any code for optimization, uglify the javascript bundle, and copy anything withint he public folder besides the html to the `./dist` folder. The reason why the html is not being copied is because this is all included inside the javascript bundle using [ngtemplate-loader](https://github.com/WearyMonkey/ngtemplate-loader). In addition the styles will be inlined after being comiled into css.

### Angular Dependency Minification Info

As we have come to know and love, when angular is minified if you don't add the necessary array syntax to name your dependencies the minification process will break angular. In order to fix this with less boilerplate this kit includes [ng-annotate](https://github.com/olov/ng-annotate). This means that within our functions/class contstructors we will need to add `'ngInject';` to tell ng-annotate to look at the dependencies and create the necessary minification fixes.
