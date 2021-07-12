$(document).ready(() => {

    /*----- Homepage Service Panel Options --------*/

    $('.box-one').on('click', function() {
        if ($(this).hasClass('box-active')) {
            $(this).removeClass('box-active');
            $('.panel-a').hide()
        } else {
            $(this).addClass('box-active');
            $('.panel-a').show(400)
        }
    });

    $('.box-two').on('click', function() {
        if ($(this).hasClass('box-active')) {
        $(this).removeClass('box-active');
        $('.panel-b').hide()
        } else {
        $(this).addClass('box-active');
            $('.panel-b').show(400)
        }
    });


    /*----- Service Page Panel Options --------*/  
    $('.author-section').on('click', () => {
        $('.author-box').toggle(600)
    });

    $('.org-section').on('click', () => {
        $('.org-box').toggle(600)
    });

})
