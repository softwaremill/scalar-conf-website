Scalar Conference Website
===================

Scalar is one-day free-to-attend conference about Scala. 
Held in Warsaw Poland, every April since 2014.

Want to become a sponsor?
Contact [scalar@scalar-conf.com](mailto:scalar@scalar-conf.com)

Organized by [softwaremill.com](https://softwaremill.com)


## 1. Overview

Development uses [Grunt](http://gruntjs.com/0)+[Jade](http://jade-lang.com/)+[Stylus](http://learnboost.github.io/stylus/)+[foundation](http://foundation.zurb.com/index.html).

- **Jade** compiles into HTML.
- **Stylus** compiles into CSS.
- **Grunt** is used for compiling both jade, stylus into HTML and CSS and concat js files.


**NOTE:** Never update HTML or CSS directly, as updates will be removed during next compilation.


## 2. Running project for the first time

### 2.1 NodeJS

For development you need [Node.js](http://nodejs.org/) to be installed. 
To check, if it's installed, run command `node -v` in console. 

If you see a version - you have it installed. 

If not - go to [nodejs.org](http://nodejs.org/) and install it from there.


### 2.2 Install dependencies

In console navigate to `scalar-conf-website` folder and run 

```
  npm install
```

This will install all required dependencies for the project.


### 2.3 GruntJS

There is a [Getting Started](http://gruntjs.com/getting-started) guide for Grunt.
It is advised to install Grunt.js globally. In order to do that run

```
  npm install -g grunt-cli
```

This will install grunt command globally and make it available for all your future projects.


**NOTE:** All described above you need to do only once - before you run project for the first time.


## 3. Development

**Every time before you start development.**

In console navigate to `scalar-conf-website` folder and run 

```
  grunt watch
```

This command tells grunt to watch for any changes in folders `jade`, `styl`, `js` and compile new versions of HTML, CSS, JS into `dist` folder. Leave it running while you change, write or update files.

*To see the changes you are making - open `dist/index.html` in your browser and reload after every change.*

TODO: Set up auto-reload


### 3.1. Updating conference info

When the new confernce is announced, in `dist` folder collect all `.html`, `.css` and `.js` files as well as `images` and `vendor` folders into the new folder, name new folder with a year (ex. `2016`). 

After that you can start development in `.jade`, `.styl` or `.js`. New `.html`, `.css` and `.js` files will be compiled automatically into `dist` folder.

To update general data about conference change data in `conf-info.json` file.

```
  {
    "day": "16",
    "month": "April",
    "month_num": "04",
    "year": 2016,
    "city": "Warsaw",
    "country": "Poland"
  }
```
It will update data on all pages, titles, as well as twitter/facebook buttons.


### 3.2. Updating agenda

There are several files responsible for compiling agenda for the website.

- `agenda-timeline.json` contains all the info about talks & breaks times. 

    For breaks (coffee / lunch) `"break":true`.

    For talks `"break": false` and `data` field should link to the `talks/talk*.md` file of corresponding talk.

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
      },
      ...
    ```

- `talks/talk*.md` files for each talk. Files contain metadata about author.

    Any metadata reference (`speaker`, `speaker_twitter`, `speaker_bio`, `talk_title`, etc.) **can not** contain paragraphs.
    Talk description (body of `.md` file) can contain paragraphs.

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

    For talks with **multiple speakers** divide info about speakers with `|`. 
    There is no restriction on how many speakers the talk can have.

    ```
      speaker: Marco Borst | Slava Schmidt
      speaker_twitter: nmcborst
      speaker_github:
      speaker_website: 
      speaker_bio: Marco Borst is a freelance developer ... | Slava Schmidt is ...
      speaker_photo: images/speakers/borst.png | images/speakers/schmidt.png
      talk_title: Contract First, Session Types Later!



      This talk's about how actors should communicate ...
    ```

- `agenda.js` script compiles `agenda-final.json` file, which contains all information about talk with precompiled HTML for talk description. 
*You don't manually change this file.*

- `jade/agenda.jade` file is responsible for visual implementation of agenda on website.


#### Overview

To update agenda, update each talk in `talks` folder. Update `agenda-timeline.json` file, if needed.


### 3.3 Updating hotels/venues

All information about hotels/venues is in `hotels.json` file.

```
  {
    "venue": true,
    "title": "Centrum Konferencyjne Muranow",
    "description": "Conference venue.",
    "address": "ul. Anielewicza 6",
    "coordinates": 
      {
        "latitude": 52.249499,
        "longitude": 20.993205
      }
  },
  { 
    "venue": false,
    "title": "Radisson Blu Centrum",
    "website": "https://www.radissonblu.com/en/hotel-warsaw",
    "stars": 5,
    "description": "Very close to the venue of the conference, planty of luxury in a very good price.",
    "price":
      {
        "single": 312.12,
        "double": 376.92
      },
    "included": "8% VAT, breakfast and Internet included",
    "address": "ul. Grzybowska 24",
    "email": "reservations.warsaw@radissonblu.com",
    "promo_code": "scalar 2016",
    "coordinates": 
      {
        "latitude": 52.236786,
        "longitude": 20.998371
      }
  },
  ...
```

`jade/hotels.jade` is responsible for visual representation of the data received from `hotels.json`.

Zoom and positioning of the map can be ajusted in `dist/main.js` file.

```
  // Center of map, change coordinates, if you want the map to be positioned differently
  var centerLatlng = new google.maps.LatLng(52.221421, 21.004352);


  // Here you can change map zoom
  var mapOptions = {
    zoom: 14,
    center: centerLatlng,
    disableDefaultUI: true
  };
  ...
```

Colors/style of the map can be changed at the bottom of the same file.

```
  // MAP STYLES - makes map blue
  var styles = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#114476"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#2aaac0"
      }
    ]
  },
  ...
```

#### Overview

To update hotels/venue, update information in `hotels.json`.



### 3.4 Writing new news

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
