var fs = require('fs');
var metamd = require('metamd');
var minify = require('html-minifier').minify;
var moment = require('moment');
moment().format();


fs.readdir('./news', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }

  var pathsArray = filenames.sort().reverse();
  var articles = [];

  for (var i = 0; i < pathsArray.length; i++) {

    if (pathsArray[i].indexOf('.md') !== -1) {

      var post = {};

      var article = metamd(fs.readFileSync('./news/'+pathsArray[i], 'utf-8'));

      var title = article.getData('title');
      var link = article.getData('permalink');
      var date = article.getData('created');
      var dateFormated = moment(date, "YYYY-MM-DD").format("MMMM DD, YYYY");
      var excerpt = article.markdown.trim().slice(0,170).trim();

      if (excerpt.indexOf('\n') !== -1) {
        var x = excerpt.replace(/\n/g, " ");
        var excerptHtml = '<p>'+x+'...</p>';

      } else {
        var excerptHtml = '<p>'+article.markdown.trim().slice(0,170).trim()+'...</p>';
      }

      var articleBody = minify(article.getHtml(), {
        collapseWhitespace: true,
      });

      post.title = title;
      post.permalink = link;
      post.date = date;
      post.dateFormated = dateFormated;
      post.excerpt = excerptHtml;
      post.body = articleBody;

      articles.push(post);

    };

  }

  fs.writeFile('news.json', JSON.stringify(articles), function (err) {
    if (err) {
      return console.log(err);
    }
  }); 

});