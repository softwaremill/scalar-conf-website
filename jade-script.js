var fs = require('fs');
var pug = require('pug');
var metamd = require('metamd');
var minify = require('html-minifier').minify;
var moment = require('moment');
moment().format();


// Take all files in news folder
fs.readdir('./news', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }

  // Sort them and reverse so the last one becomes the first one
  var pathsArray = filenames.sort().reverse();

  for (var i = 0; i < pathsArray.length; i++) {

    // Check if it's .md file
    if (pathsArray[i].indexOf('.md') !== -1) {

      var locals = {};

      // Read it's content
      var newsPostData = metamd(fs.readFileSync('./news/'+pathsArray[i], 'utf-8'));

      // Parse metadata
      var title = newsPostData.getData('title');
      var link = newsPostData.getData('permalink');
      var date = newsPostData.getData('created');
      var dateFormated = moment(date, "YYYY-MM-DD").format("MMMM DD, YYYY");
      var postBody = minify(newsPostData.getHtml(), {
        collapseWhitespace: true,
      });

      // Create an object with all data
      locals.title = title;
      locals.permalink = link;
      locals.date = date;
      locals.dateFormated = dateFormated;
      locals.body = postBody;


      // Read general conference info and make it available
      var conf_info = JSON.parse(fs.readFileSync('conf-info.json', 'utf-8'));
      locals.conf_info = conf_info;

      function merge(obj1, obj2) {
        var result = {};
        for(var key in obj1) 
          result[key] = obj1[key];
        for(var key in obj2) 
          result[key] = obj2[key];
        return result;
      }

      locals.filename= "./pug/templates/news-post-template.pug";


      // Use news template, pass object with data and render an html
      var html = pug.renderFile('./pug/templates/news-post-template.pug', locals);


      // Write html file into dist/news folder
      fs.writeFileSync('dist/news/'+link+'.html', html);
      console.log('New version created!');

    }

  };

});