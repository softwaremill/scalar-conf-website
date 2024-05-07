# Scalar Conference Website

Scalar - one-day free-to-attend conference about Scala.
Held in Warsaw Poland, on April 5, 2014.

Want to become sponsor?
Contact scalar@scalar-conf.com

Organized by https://softwaremill.com

## Overview

This website uses [Grunt](http://gruntjs.com/0)+[Jade](http://jade-lang.com/)+[Stylus](http://learnboost.github.io/stylus/)+[foundation](http://foundation.zurb.com/index.html) for faster development.

- **Jade** compiles into HTML.
- **Stylus** compiles into CSS.
- **Grunt** is used for compiling both jade and stylus into HTML and CSS.

**NOTE: Never update HTML or CSS directly, as updates will be removed next time while compilation.**

## Running project for the first time

### NodeJS

To work on project (update anyhting on website) first you need [Node.js](http://nodejs.org/) to be installed.
To check, if it's installed, run command `node -v` in console.
If you see version - than you have it installed.

If not - go to [http://nodejs.org/](nodejs.org) and install it from there.

### How to run?

#### Install dependencies

In console navigate to `scalar-conf-website` folder and run

```
  npm install
```

This will install all required dependencies for this project.

#### Pygments

Page build uses the `pygmentize` command. Use

```
pip install Pygments
```

to install this tool. Sudo may be required (`sudo pip install Pygments`).

#### Run

In your terminal, run the command `npm run start:dev`. This will compile & watch for changes in files.
Open another terminal window and run `npm run serve`. This will run a small http server on `localhost:8080`, where you can lookup the application.

## Updating news

**Every time before you start doing any changes!**
In console navigate to `scalar-conf-website` folder and run

```
  npm run start:dev
```

This command tells grunt to watch for any changes in forlders `jade`, `styl`, `js` and compile new versions of HTML, CSS, JS into `dist` folder. Leave it running while you change, write or update files.

Now you are ready to change \*.jade files.

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

## Deploy the production version

This instruction outlines the process for deploying the production version of the application on https://old.scalar-conf.com/.

#### Step 1: Merge Feature Branch with `master` branch

1. Ensure that changes in the feature branch are comprehensive and locally tested.
2. Merge the feature branch with the `master` branch on GitHub platform ( https://github.com/softwaremill/scalar-conf-website ).

#### Step 2: Contact DevOps Team Members

1. Upon completion of merging, reach out to the relevant DevOps team members.
2. Request an upload to the AWS S3 bucket as the website is static.
3. Prepare a message requesting deployment on the `#project-sml-devops` Slack channel.
