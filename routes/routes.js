'use strict';

var fs = require('fs');
var ytdl = require('ytdl-core');

module.exports = function(app) {

    // frontend routes
    app.get('*', function(req, res) {
        res.sendfile('./index.html');
    });
    // ytdl('https://www.youtube.com/watch?v=YE7VzlLtp-4')
    //    	.pipe(fs.createWriteStream('video.avi'));
}
