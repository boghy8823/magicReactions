'use strict';

var fs = require('fs');
var ytdl = require('ytdl-core');
var ffmpeg = require('ffmpeg');

module.exports = function(app) {

    // frontend routes
    app.post('/getVideo', function(req, res) {

        ytdl(req.body.url)
            .pipe(fs.createWriteStream('public/requestedVideo.avi'))
            .on('error', console.error)
            .on('finish', function() {
                try {
                    var process = new ffmpeg('public/requestedVideo.avi');
                    process.then(function(video) {
                        video
                            .setVideoStartTime('00:00:05')
                            .setVideoDuration(25)
                            .save('public/convertedVideo.webm', function(error, file) {
                                if (!error) {
                                    console.log("saving the video", file);
                                    return res.send("Video was converted");
                                } else {
                                    console.log("error", error);
                                }

                            });

                    }, function(err) {
                        console.log('Error: ' + err);
                    });
                } catch (e) {
                    console.log(e.code);
                    console.log(e.msg);
                }
            })

    });

}
