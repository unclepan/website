import $ from 'jquery';

$('.list_tag_img').hover(function(){
    $(this).find('a.tag,p.time_pv').slideDown(120);
},function(){
    $('.list_tag_img p.time_pv,.list_tag_img a.tag').slideUp(120);
});