import $ from 'jquery';
/* 控制左右按钮显示 */
$('.fullSlide').hover(function(){ $(this).find('.prev,.next').stop(true,true).fadeTo('show',0.7); },function(){ $(this).find('.prev,.next').fadeOut(); });