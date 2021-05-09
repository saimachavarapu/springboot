$(() => {
    $('#selected-plays')
        .addClass('flex');
    $('#selected-plays > li')
        .addClass('horizontal');
    $('#selected-plays li:not(.horizontal)')
        .addClass('sub-level')
    $('a[href^="mailto:"]')
        .addClass('mailto');
    $('a[href$=".pdf"]')
        .addClass('pdflink');
    $('a[href^="http"][href*="henry"]')
        .addClass('henrylink');
    $('tr:nth-child(odd)').addClass('alt');
    // $('td:contains(Henry)')
    //     .nextAll()
    //     .addBack()
    //     .addClass('highlight');
    $('td:contains(Henry)')
        .parent()
        .children()
        .addClass('highlight');
    $('a')
        .filter((i, a) =>
            a.hostname && a.hostname !== location.hostname
        )
        .addClass('external');
})