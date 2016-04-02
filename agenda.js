var fs = require('fs');
var minify = require('html-minifier').minify;
var metamd = require('metamd');


// Read agenda-timeline file
var timeline = JSON.parse(fs.readFileSync('agenda-timeline.json', 'utf-8'));
var timelineData = [];

// For each item 
for (var i = 0; i < timeline.length; i++) {

  var timespan = {};
  
  // If it's a speaker talk
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

    // Add info into timespan.data notion
    timespan.data.speaker = talkData.getData('speaker');
    timespan.data.speaker_twitter = talkData.getData('speaker_twitter');
    timespan.data.speaker_github = talkData.getData('speaker_github');
    timespan.data.speaker_website = talkData.getData('speaker_website');
    timespan.data.speaker_bio = talkData.getData('speaker_bio');
    timespan.data.speaker_photo = talkData.getData('speaker_photo');
    timespan.data.talk_title = talkData.getData('talk_title');
    timespan.data.talk_description = talkDescription;

    // Push it info final array
    timelineData.push(timespan);
  } 

  // If it's a break time
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
