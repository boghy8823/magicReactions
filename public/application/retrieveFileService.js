function getFileFromUrl(e) {
    e.preventDefault();

    var videoUrl = document.getElementById('url-address').value;
    var videoContainer = document.getElementById('video-sample');
    getVideoFromUrl(videoUrl).done(function(response) {
        console.log("Great success - ", response);
        videoContainer.src = "http://localhost:8080/convertedVideo.webm";
        return response;
    })
}


function getVideoFromUrl(videoUrl) {
    return $.ajax({
        method: "POST",
        url: "http://localhost:8080/getVideo",
        data: { url: videoUrl }
    })

}
