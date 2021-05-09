$(() => {
    $('div.chapter a[href*="wikipedia"]')
        .attr({
            rel: 'external',
            rel: 'external',
            title: function() {
                return `Learn more about ${$(this).text()} at Wikipedia.`;
            },
            // id: index => `wikilink-${index}`

        });
    $('.chapter p')
        .click((e) => {
            const $elm = $(e.target);
            $elm
                .css(
                    'textDecoration',
                    $elm.data('read') ? 'none' : 'line-through'
                )
                .data('read', !$(e.target).data('read'));
        });
    $('<a href="#top">back to top</a>')
        .insertAfter('div.chapter p');
    $('#hide-read').click((e) => {
        const currentlyChecked = $('#hide-read').prop('checked');
        if (currentlyChecked == true) {
            $('.chapter').addClass('hidden');
        } else {
            $('.chapter').removeClass('hidden');
        }
    });

    // $('span.footnote')
    //     .insertBefore('#footer')
    //     .wrapAll('<ol id="notes"></ol>')
    //     .wrap('<li></li>');
    const $notes = $('<ol id="notes"></ol>')
        .insertBefore('#footer');
    $('span.footnote')
        .each((i, span) => {
            $(span)
                .before([
                    '<a href="#footnote-',
                    i + 1,
                    '" id="context-',
                    i + 1,
                    '" class="context">',
                    '<sup>',
                    i + 1,
                    '</sup></a>'
                ].join(''))
                .appendTo($notes)
                .append([
                    '&nbsp;(<a href="#context-',
                    i + 1,
                    '">context</a>)'
                ].join(''))
                .wrap('<li></li>');
        });
    // $('div.chapter p:eq(0)').clone();
    // $('div.chapter p:eq(0)')
    //     .clone()
    //     .insertBefore('div.chapter');
    $('span.pull-quote')
        .each((i, span) => {
            $(span).parent()
                .css('position', 'relative');
        });
    $('span.pull-quote')
        .each((i, span) => {
            $(span)
                .clone()
                .addClass('pulled')
                .find('span.drop')
                .html('&hellip;')
                .end()
                .prependTo(
                    $(span)
                    .parent()
                    .css('position', 'relative')
                );
        });
});