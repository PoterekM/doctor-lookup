# _Doctor Lookup_

#### _Modern JS Apps: Independent Code Review, 8.4.2017_

#### By _**Michelle Poterek**_

## Description

_This is a website where users may enter a medical issue in a form, submit it, and receive a list of doctors nearby who can treat their medical issue._

## Setup Requirements

_**Ensure that the following programs are downloaded to your computer:**_

  * [Node](https://nodejs.org/en/)
  * [Ruby](https://www.ruby-lang.org/en/downloads/)
  * To install gulp, bower, and sass globally open terminal and type:
    * `npm install gulp -g`
    * `npm install bower -g`
    * `gem install sass`

_**Cloning directions:**_
  * From your local console:
    * Enter Desktop by typing `cd Desktop`
    * Type `git clone https://github.com/PoterekM/doctor-lookup.git`
    * Type `cd doctor-lookup` to enter directory.
    * To install packages in project type:
      * `npm install`
      * `bower install`
      * Go to https://developer.betterdoctor.com/ and sign up for an API key
      * At the top level of your file create a file called `.env`
        * exports.apiKey = "YOUR-API-KEY-GOES-HERE";
      * `gulp build`
      * `gulp serve`
    * At this point the browser will open at localhost:3000 in order to view app.


## Configuration and Dependencies
* npm
* gulp
* bower
* bower-files
* browser-sync
* browserify
* vinyl-source-stream
* del
* jshint
* gulp-concat
* gulp-uglify
* gulp-util
* gulp-jshint
* gulp-sass
* gulp-sourcemaps
* jquery
* bootstrap

## Technologies Used

* _JavaScript_
* _jQuery_
* _GULP_
* _HTML_
* _SASS_
* _Node.js_

## Known Bugs
* _There are no known current bugs_

### License

Copyright &copy; 2017 Michelle Poterek

This software is licensed under the MIT license.
