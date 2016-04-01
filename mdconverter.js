var fs = require('fs');
var minify = require('html-minifier').minify;
var metamd = require('metamd');

// Read data about talk from markdown file
var talkData = metamd(fs.readFileSync('talks/talk1.md', 'utf-8'));


// Minify talk description
var talkDescription = minify(talkData.getHtml(), {
  collapseWhitespace: true,
});


// Create agenda JSON
var agenda = {};

agenda.speaker = talkData.getData('speaker');
agenda.speaker_twitter = talkData.getData('speaker_twitter');
agenda.speaker_github = talkData.getData('speaker_github');
agenda.speaker_website = talkData.getData('speaker_website');
agenda.speaker_bio = talkData.getData('speaker_bio');
agenda.talk_title = talkData.getData('talk_title');
agenda.talk_description = talkDescription;


// Write agenda into file
fs.writeFile('agenda-final.json', JSON.stringify(agenda), function (err) {
  if (err) {
    return console.log(err);
  }
});
