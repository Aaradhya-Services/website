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

// Services Hover
$("#services_insurance").hover(
    function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_insurance_description").css("visibility", "visible").hide().fadeIn('slow');
        }
    }, function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_insurance_description").css("visibility", "hidden");
        }
    }
);

$("#services_dealership").hover(
    function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_dealership_description").css("visibility", "visible").hide().fadeIn('slow');
        }
    }, function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_dealership_description").css("visibility", "hidden");
        }
    }
);

$("#services_rental").hover(
    function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_rental_description").css("visibility", "visible").hide().fadeIn('slow');
        }
    }, function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_rental_description").css("visibility", "hidden");
        }
    }
);

$("#services_labour").hover(
    function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_labour_description").css("visibility", "visible").hide().fadeIn('slow');
        }
    }, function () {
        if (!(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#services_labour_description").css("visibility", "hidden");
        }
    }
);

if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#services_insurance_description").css("visibility", "visible");
    $("#services_dealership_description").css("visibility", "visible");
    $("#services_rental_description").css("visibility", "visible");
    $("#services_labour_description").css("visibility", "visible");
}