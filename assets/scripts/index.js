// stores no of offers added
const no_of_offers = $(".offer_item").length;
if (no_of_offers == 1) {
    $('#offers_control_left_button').hide();
    $('#offers_control_right_button').hide();
}
else {
    $('#offers_control_left_button').show();
    $('#offers_control_right_button').show();
    for (i = 1; i < no_of_offers; i++) {
        document.getElementsByClassName('offer_item')[i].style.display = 'none';
    }
}
var active_offer = 0;

$('#offers_control_left_button').on('click', () => {
    document.getElementsByClassName('offer_item')[active_offer].style.display = 'none';
    if (active_offer == 0) {
        document.getElementsByClassName('offer_item')[no_of_offers - 1].style.display = 'inherit';
        active_offer = no_of_offers - 1
    }
    else {
        document.getElementsByClassName('offer_item')[active_offer - 1].style.display = 'inherit';
        active_offer = active_offer - 1
    }
});
$('#offers_control_right_button').on('click', () => {
    document.getElementsByClassName('offer_item')[active_offer].style.display = 'none';
    if (active_offer == no_of_offers - 1) {
        document.getElementsByClassName('offer_item')[0].style.display = 'inherit';
        active_offer = 0
    }
    else {
        document.getElementsByClassName('offer_item')[active_offer + 1].style.display = 'inherit';
        active_offer = active_offer + 1
    }
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 100) {
        $(".navbar").addClass('navbar_resize');
        $(".navbar").removeClass('navbar_noresize');
        $(".navbar img").addClass('navbar_logo_resize');
        $(".navbar img").removeClass('navbar_logo_noresize');
        $(".navbar-toggler").addClass('navbar_toggler_resize');
        $(".navbar-toggler").removeClass('navbar_toggler_noresize');

    }
    if (scroll_amount == 0) {
        $(".navbar").removeClass('navbar_resize');
        $(".navbar").addClass('navbar_noresize');
        $(".navbar img").removeClass('navbar_logo_resize');
        $(".navbar img").addClass('navbar_logo_noresize');
        $(".navbar-toggler").removeClass('navbar_toggler_resize');
        $(".navbar-toggler").addClass('navbar_toggler_noresize');
    }
});