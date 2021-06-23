const carousel_items = $( ".carousel_item");
const no_of_carousel_items = carousel_items.length;

var active_carousel_item = 0;

$('#offers_carousel_left_button').on('click', () => {
    document.getElementsByClassName('carousel_item')[active_carousel_item].style.display = 'none';
    if(active_carousel_item == 0){
        document.getElementsByClassName('carousel_item')[no_of_carousel_items-1].style.display = 'inherit';
        active_carousel_item=no_of_carousel_items-1
    }
    else{
        document.getElementsByClassName('carousel_item')[active_carousel_item-1].style.display = 'inherit';
        active_carousel_item=active_carousel_item-1
    }
});
$('#offers_carousel_right_button').on('click', () => {
    document.getElementsByClassName('carousel_item')[active_carousel_item].style.display = 'none';
    if(active_carousel_item == no_of_carousel_items-1){
        document.getElementsByClassName('carousel_item')[0].style.display = 'inherit';
        active_carousel_item=0
    }
    else{
        document.getElementsByClassName('carousel_item')[active_carousel_item+1].style.display = 'inherit';
        active_carousel_item=active_carousel_item+1
    }
});