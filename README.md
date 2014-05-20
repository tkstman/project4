<<<<<<< HEAD
gae-init
========

**gae-init** is the easiest way to kick start new applications on Google
App Engine using Flask, Bootstrap and tons of other cool features.

Read more in the [docs][], where you can find a complete [feature list][],
a detailed [tutorial][] on how to build a phonebook application and more..

The latest version is always accessible from
[http://gae-init.appspot.com](http://gae-init.appspot.com)

Running the Development Environment
-----------------------------------

    $ cd /path/to/project-name
    $ ./run.py -s

To test it visit `http://localhost:8080/` in your browser.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

To watch for changes of your `*.less` & `*.coffee` files and compile them
automatically to `*.css` & `*.js` execute in another bash:

    $ ./run.py -w

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

For a complete list of commands:

    $ ./run -h

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Grunt is used only for watching for changes and live reloading the page.
Install [grunt command line interface][grunt-cli] as a global package:

    $ npm install -g grunt-cli

and then from the root execute with no arguments:

    $ grunt

Deploying on Google App Engine
------------------------------

Before deploying make sure that the `app.yaml` and `config.py` are up to date
and you ran the `run.py` script to minify all the static files:

    $ ./run.py -m
    $ appcfg.py update main

Tech Stack
----------

  - [Google App Engine][]
  - [Python 2.7][]
  - [NDB][]
  - [Jinja2][]
  - [Flask][]
  - [jQuery][]
  - [CoffeeScript][]
  - [LessCSS][]
  - [Bootstrap][]
  - [Font Awesome][]
  - [NProgress][]
  - [Moment.js][]

Requirements
------------

  - [Google App Engine SDK for Python][]
  - [node.js][]
  - [OSX][] or [Linux][] or [Windows][]

Contributions and Ideas
-----------------------

  - [tzador][]
  - [chris][]
  - [ksymeon][]
  - [gmist][]
  - [stefanlindmark][]
  - [joernhees][]
  - [xcash][]
  - [mdxs][]

Author
------

[![Lipis flair on stackoverflow.com][lipisflair]][lipis]

[bootstrap]: http://getbootstrap.com/
[chris]: http://stackoverflow.com/users/226394/chris-top
[coffeescript]: http://coffeescript.org/
[docs]: http://docs.gae-init.appspot.com
[feature list]: http://docs.gae-init.appspot.com/features/
[flask]: http://flask.pocoo.org/
[font awesome]: http://fortawesome.github.com/Font-Awesome/
[gmist]: https://github.com/gmist
[google app engine sdk for python]: https://developers.google.com/appengine/downloads
[google app engine]: https://developers.google.com/appengine/
[grunt-cli]: https://github.com/gruntjs/grunt-cli
[jinja2]: http://jinja.pocoo.org/docs/
[joernhees]: https://github.com/joernhees
[jquery]: http://jquery.com/
[ksymeon]: https://plus.google.com/102598378133436784997
[lesscss]: http://lesscss.org/
[linux]: http://www.ubuntu.com
[lipis]: http://stackoverflow.com/users/8418/lipis
[lipisflair]: http://stackexchange.com/users/flair/5282.png
[mdxs]: https://github.com/mdxs
[moment.js]: http://momentjs.com/
[ndb]: https://developers.google.com/appengine/docs/python/ndb/
[node.js]: http://nodejs.org/
[nprogress]: http://ricostacruz.com/nprogress/
[osx]: http://www.apple.com/osx/
[python 2.7]: https://developers.google.com/appengine/docs/python/python27/using27
[stefanlindmark]: http://www.linkedin.com/in/stefanlindmark
[tutorial]: http://docs.gae-init.appspot.com/tutorial/
[tzador]: http://stackoverflow.com/users/165697/tzador
[windows]: http://windows.microsoft.com/
[xcash]: https://github.com/xcash
=======
## Python Flask Skeleton for Google App Engine

A skeleton for building Python applications on Google App Engine with the
[Flask micro framework](http://flask.pocoo.org).

See our other [Google Cloud Platform github
repos](https://github.com/GoogleCloudPlatform) for sample applications and
scaffolding for other python frameworks and use cases.

## Run Locally
1. Install the [App Engine Python SDK](https://developers.google.com/appengine/downloads).
See the README file for directions. You'll need python 2.7 and [pip 1.4 or later](http://www.pip-installer.org/en/latest/installing.html) installed too.

2. Clone this repo with

   ```
   git clone https://github.com/GoogleCloudPlatform/appengine-python-flask-skeleton.git
   ```
3. Install dependencies in the project's lib directory.
   Note: App Engine can only import libraries from inside your project directory.

   ```
   cd appengine-python-flask-skeleton
   pip install -r requirements.txt -t lib
   ```
4. Run this project locally from the command line:

   ```
   dev_appserver.py .
   ```

Visit the application [http://localhost:8080](http://localhost:8080)

See [the development server documentation](https://developers.google.com/appengine/docs/python/tools/devserver)
for options when running dev_appserver.

## Deploy
To deploy the application:

1. Use the [Admin Console](https://appengine.google.com) to create a
   project/app id. (App id and project id are identical)
1. [Deploy the
   application](https://developers.google.com/appengine/docs/python/tools/uploadinganapp) with

   ```
   appcfg.py -A <your-project-id> --oauth2 update .
   ```
1. Congratulations!  Your application is now live at your-app-id.appspot.com

## Next Steps
This skeleton includes `TODO` markers to help you find basic areas you will want
to customize.

### Relational Databases and Datastore
To add persistence to your models, use
[NDB](https://developers.google.com/appengine/docs/python/ndb/) for
scale.  Consider
[CloudSQL](https://developers.google.com/appengine/docs/python/cloud-sql)
if you need a relational database.

### Installing Libraries
See the [Third party
libraries](https://developers.google.com/appengine/docs/python/tools/libraries27)
page for libraries that are already included in the SDK.  To include SDK
libraries, add them in your app.yaml file. Other than libraries included in
the SDK, only pure python libraries may be added to an App Engine project.

### Feedback
Star this repo if you found it useful. Use the github issue tracker to give
feedback on this repo.

## Contributing changes
See [CONTRIB.md](CONTRIB.md)

## Licensing
See [LICENSE](LICENSE)

## Author
Logan Henriquez and Johan Euphrosine
>>>>>>> d04f8cc6b5d1fbe1ed3c11a9014fe5e559289dd8
