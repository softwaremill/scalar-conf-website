Scalar Conference Website
===================

Scalar is one-day free-to-attend conference about Scala. 
Held in Warsaw Poland, sometime in April since 2014.

Want to become a sponsor?
Contact [mailto:scalar@scalar-conf.com](scalar@scalar-conf.com)

Organized by [https://softwaremill.com](softwaremill.com)


## Overview

Development uses [Grunt](http://gruntjs.com/0)+[Jade](http://jade-lang.com/)+[Stylus](http://learnboost.github.io/stylus/)+[foundation](http://foundation.zurb.com/index.html).

- **Jade** compiles into HTML.
- **Stylus** compiles into CSS.
- **Grunt** is used for compiling both jade, stylus into HTML and CSS and concat js files.

**NOTE: Never update HTML or CSS directly, as updates will be removed during next compilation.**


## Running project for the first time

### NodeJS

To work on project (update anything on website) you need [Node.js](http://nodejs.org/) to be installed. 
To check, if it's installed, run command `node -v` in console. 
If you see version - than you have it installed. 

If not - go to [http://nodejs.org/](nodejs.org) and install it from there.


### Install dependencies

In console navigate to `scalar-conf-website` folder and run 

```
  npm install
```

This will install all required dependencies for the project.


### GruntJS

There is a Getting Started guide for grunt [gruntjs.com/getting-started](http://gruntjs.com/getting-started).
It is advised to install Grunt.js globally. In order to do that, please run

```
  npm install -g grunt-cli
```

This will install grunt command globally and make it available for all your future projects.

**NOTE: All described above you need to do only once - when you run project for the first time.**


## Development

**Every time before you start development!** 
In console navigate to `scalar-conf-website` folder and run 

```
  grunt watch
```

This command tells grunt to watch for any changes in forlders `jade`, `styl`, `js` and compile new versions of HTML, CSS, JS into `dist` folder. Leave it running while you change, write or update files.

*To see the changes you are making - open `dist/index.html` in your browser and reload after every change.*
TODO: Set up auto-reload


## Updating agenda

There are several files responsible for compiling agenda for the website.

- `agenda-timeline.json` contains all the info about talks & breaks times. 

For breaks (coffee/lunch) `"break":true`
For talks `"break": false` and `data` field should link to the `talk/talk*.md` file of corresponding talk.

```
  {
    "time": "8:50",
    "break": true,
    "data": "Welcome"
  },
  {
    "time": "9:00",
    "break": false,
    "data": "talks/talk1.md"
  }
```

- `talks/talk*.md` files for each of talks. Files contain metadata about author.

```
  speaker: Jan Pustelnik
  speaker_twitter: gosubpl
  speaker_github: gosubpl
  speaker_website:
  speaker_bio: Jan is a Scala & Java developer ...
  speaker_photo: images/speakers/pustelnik.png
  talk_title: Cool toolz in the Scalaz and Cats toolboxes



  In this talk we intend to show that the two libraries: Scalaz and Cats ...
```

For talks with multiple speakers divide info about speakers with `|`. 
There is no restriction of how many speakers the talk can have.

```
  speaker: Marco Borst | Slava Schmidt
  speaker_twitter: nmcborst | second_speaker_twitter
  speaker_github:
  speaker_website: 
  speaker_bio: Marco Borst and Slava Schmidt are ...
  speaker_photo: images/speakers/borst.png | images/speakers/schmidt.png
  talk_title: Contract First, Session Types Later!



  This talk's about how actors should communicate ...
```

- `agenda.js` script that compiles `agenda-final.json` file, that contains all information about talk with precompiled HTML for talk description. 
You don't manually change this file.

- 'jade/agenda.jade' file is responsible for visiaul implementation of agenda on website.


### Writing new news

Every news post is saved as 'numbered' file (1.jade, 2.jade ... n.jade). To create new news post simply create new numbered file (for example the last one is 3.jade, so you need to create 4.jade file).

Copy and past content from any other numbered file into new file (4.jade) and update fileds there.

Right at the top you have:

```
  - var title = 'Scalar got a venue!'
  - var permalink = '#scalar-got-venue'
  - var date = 'January 21, 2014'
  - var dateISO = '2014-01-21'
```

- `title` - title of the blog post
- `permalink` - identifier for this particular post. Should start with `#` and do not contain any spaces
- `date` - date, when news is posted
- `dateISO` - smae date, but in ISO 8601 format - YYYY-MM-DD

After this is updated go to line

```
  +article(title, date, dateISO, permalink)
```

and start writing news post starting from the next line.

For references on how to write in Jade check [jade-lang.com/reference/](http://jade-lang.com/reference/). At first it might be difficult, but then you'll find it very easy:)

Tags in Jade are simplified.

So for **paragraph** just write

```
  p This is papagraph.
  p This is next paragpaph.
```

To add **link**

```
  p This is my paragraph with 
    a(href="https://twitter.com/scalarconf") link
    | and paragraph continues here.
  p And my next paragraph.
```

To add **image**

```
  p 
    img(src="images/sponsors/sponsor.png")
  p My next paragraph.
```

If you have problems converting something into jade you can use this online converter [html2jade.aaron-powell.com](http://html2jade.aaron-powell.com/).

**NOTE: It's very important to keep identation equal** Indent using spaces. 1 tab is 2 spaces.

## Updating index and news pages

Next step is to add new news post to **news** page.

Open `news.jade` file, find where news posts are being added `include news-posts/3.jade` and write same line above with freshly new number of blog post.

For example:

From this:

```
  include news-posts/3.jade
  include news-posts/2.jade
  include news-posts/1.jade
```

to this:

```
  include news-posts/4.jade
  include news-posts/3.jade
  include news-posts/2.jade
  include news-posts/1.jade
```


Next is to update news on **index** page.

Open `news-section.jade` file, find 2 lines started with `include` and update numbers there. The latest news number should be in the top line, the previous news - in the second line.

Let's say you have added `4.jade` news file.

So in `news-section.jade` file you have:

```
  div.small-12.medium-4.large-4.columns
    include news-posts/3.jade
    a.read-more.button(href="http://scalar-conf.com/news.html") read more

  div.small-12.medium-4.large-4.columns
    include news-posts/2.jade
    a.read-more.button(href="http://scalar-conf.com/news.html") read more
```

update it as:

```
  div.small-12.medium-4.large-4.columns
    include news-posts/4.jade
    a.read-more.button(href="http://scalar-conf.com/news.html") read more

  div.small-12.medium-4.large-4.columns
    include news-posts/3.jade
    a.read-more.button(href="http://scalar-conf.com/news.html") read more
```

You are done:)

From time to time check if Grunt doesn't have problems compiling everything - it will write something in console.

After the last update of `news-section.jade` push changes to github and you are done.
