$(() => {
    $('body').addClass('large');
    $('#switcher-default')
        .addClass('selected');
    $('#switcher-default')
        .on('click', function() {
            $('body')
                .removeClass('narrow')
                .removeClass('large');
            $('#switcher button')
                .removeClass('selected');
            $(this)
                .addClass('selected');
        });
    $('#switcher-narrow')
        .on('click', function() {
            $('body')
                .addClass('narrow')
                .removeClass('large');
            $('#switcher button')
                .removeClass('selected');
            $(this)
                .addClass('selected');
        });
    $('#switcher-large')
        .on('click', function() {
            $('body')
                .removeClass('narrow')
                .addClass('large');
            $('#switcher button')
                .removeClass('selected');
            $(this)
                .addClass('selected');
 
        })
    $('#switcher h3')
        .hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    $('#switcher')
        .click(function(event) {
            $('#switcher button').toggleClass('hidden');
        });
    // $('#switcher h3')  //This block is used, when you want to toggle the hidden when you click on heading
    //     .click(function() {
    //         $(this)
    //             .siblings('button')
    //             .toggleClass('hidden');
    //     });
 
});