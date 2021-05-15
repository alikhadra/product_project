$(document).ready(function () {
    $(function () {
        $("#commentForm").validate();
    });
});

var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
    }

