var fs = require('fs');


var news = fs.readdir('jade/news', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
});