$("body").on("click", ".picture-btn", function() {

    if (!navigator.camera) {
        alert("Camera not supported");
        return;
    }

    var options = {   quality: 45,
        targetWidth: 800,
        targetHeight: 800,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false };

    navigator.camera.getPicture(
        function (imageURI) {
            setTimeout(function() {
                $('#audience-pic').attr("src", imageURI);
            });
        },
        function (message) {
            console.log(message);
        },
        options);
    return false;

});

var timeTouch;

$("body").on("touchend", ".needsclick", function() {
    timeTouch =  new Date().getTime();
});

$("body").on("click", ".needsclick", function() {
    if (timeTouch) {
        $("#log-slow").html("click: " + (new Date().getTime() - timeTouch) + "ms");
    } else {
        alert("You need to run this test on a touch enabled device");
    }
    return false;
});

$("body").on("touchend", ".fastclick", function() {
    timeTouch =  new Date().getTime();
});

$("body").on("click", ".fastclick", function() {
    if (timeTouch) {
        $("#log-fast").html("touchend: " + (new Date().getTime() - timeTouch) + "ms");
    } else {
        alert("You need to run this test on a touch enabled device");
    }
    return false;
});

function slide(page, position) {
    var $i = $("#phone");
    var $p = $("#"+page);
    var $c = $("#"+page+"class");
    $i.css("z-index", 20);
    $(".page").css("z-index", 5);
    $p.css("z-index", 10);
    $p.attr("class", "page transition " + position);
    $c.html('class="' + position.substr(5) + '"');
    setTimeout(function() {
        $i.css("z-index", 0);
    },250);
}