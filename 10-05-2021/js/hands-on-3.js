$(() => {
    $('.chapter-title').click(function() {
        $(this).nextAll().toggle();
    });
    $("p").mousemove(function(event) {
        var relX = event.pageX - $(this).offset().left;
        var relY = event.pageY - $(this).offset().top;
        console.log("X-cordinate " + relX + "Y-cordinate" + relY);
    });
});