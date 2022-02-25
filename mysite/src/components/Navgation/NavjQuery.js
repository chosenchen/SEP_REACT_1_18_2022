import $ from 'jquery';

export default function navigation() {
    $('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
        'margin-top',
        ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );

    $(window).resize(function () {
        setTimeout(navigation, 500);
    });
}