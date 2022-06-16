$('.card__photos a').on('click', function (e) {
    e.preventDefault();
    $('.card__photos a').removeClass('active');
    $(this).addClass('active');
    $('.card__img img').attr('src', $(this).find('img').attr('src'));
});
$('.card .minus').on('click', function (e) {
    e.preventDefault();
    let inp = $(this).closest('.card__count').find('input');
    let count = parseInt(inp.val()) - 1;
    count = count < 1 ? 1 : count;
    inp.val(count);
});
$('.card .plus').on('click', function (e) {
    e.preventDefault();
    let inp = $(this).closest('.card__count').find('input');
    let count = parseInt(inp.val()) + 1;
    count = count > parseInt(inp.data('max-count')) ? parseInt(inp.data('max-count')) : count;
    inp.val(parseInt(count));
});

$('.card__click').on('click', function (e) {
    e.preventDefault();
    $('.overlay-click').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.overlay-click').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-click').removeClass('overlay-active');
    }
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    $('.overlay-click').removeClass('overlay-active');
});

$('.header-burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header__drop').toggleClass('active');
});