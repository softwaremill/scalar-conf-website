var fs = require('fs');
var minify = require('html-minifier').minify;
var metamd = require('metamd');


// Read agenda-timeline file
var timeline = JSON.parse(fs.readFileSync('agenda-timeline.json', 'utf-8'));
var timelineData = [];

// For each item 
for (var i = 0; i < timeline.length; i++) {

  var timespan = {};
  
  //-- If it's a speaker talk
  if (timeline[i].break == false) {

    timespan.time = timeline[i].time;
    timespan.break = timeline[i].break;

    // Read data about talk from markdown file
    var talkData = metamd(fs.readFileSync(timeline[i].data, 'utf-8'));

    // Minify talk description into one-line HTML
    var talkDescription = minify(talkData.getHtml(), {
      collapseWhitespace: true,
    });

    timespan.data = {};

    // Check if there are 2 or more speakers, create an array for speaker info
    if (talkData.getData('speaker').indexOf("|") != "-1") {

      var speakers = talkData.getData('speaker').split("|").map(function (s) { return s.trim();});
      var twitters = talkData.getData('speaker_twitter').split("|").map(function (s) { return s.trim();});
      var githubs = talkData.getData('speaker_github').split("|").map(function (s) { return s.trim();});
      var websites = talkData.getData('speaker_website').split("|").map(function (s) { return s.trim();});
      var bios = talkData.getData('speaker_bio').split("|").map(function (s) { return s.trim();});
      var photos = talkData.getData('speaker_photo').split("|").map(function (s) { return s.trim();});

      timespan.data.speaker = speakers;
      timespan.data.speaker_twitter = twitters;
      timespan.data.speaker_github = githubs;
      timespan.data.speaker_website = websites;
      timespan.data.speaker_bio = bios;
      timespan.data.speaker_photo =  photos;

    } else {

      timespan.data.speaker = talkData.getData('speaker').trim();
      timespan.data.speaker_twitter = talkData.getData('speaker_twitter').trim();
      timespan.data.speaker_github = talkData.getData('speaker_github').trim();
      timespan.data.speaker_website = talkData.getData('speaker_website').trim();
      timespan.data.speaker_bio = talkData.getData('speaker_bio').trim();
      timespan.data.speaker_photo = talkData.getData('speaker_photo').trim();

    }

    // Add talk title and description into timespan.data notion
    timespan.data.talk_title = talkData.getData('talk_title').trim();
    timespan.data.talk_description = talkDescription;

    // Push it info final array
    timelineData.push(timespan);
  } 

  //-- If it's a break time
  else {

    timespan.time = timeline[i].time;
    timespan.break = timeline[i].break;
    timespan.data = timeline[i].data;

    // Push it info final array
    timelineData.push(timespan);
  }

};

// Write final agenda with all the info into agenda-final.json file
fs.writeFile('agenda-final.json', JSON.stringify(timelineData), function (err) {
  if (err) {
    return console.log(err);
  }
});
