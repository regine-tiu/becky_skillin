$(document).ready(() => {

/*----- Homepage Service Panel Options --------*/
    $('.box-one').on('click', event =>{
        $(event.currentTarget).addClass('box-active');
        $('.panel-a').toggle(400)
    });

    $('.box-two').on('click', event =>{
        $(event.currentTarget).addClass('box-active');
        $('.panel-b').toggle(400)
    });

})