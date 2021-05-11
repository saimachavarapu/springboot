$(() => {
    $('#selected-plays > li > ul > li').addClass('special');
    $('td:nth-child(3)').addClass("year");
    $('td:contains(Tragedy)').eq(0).parent().addClass('special');
});