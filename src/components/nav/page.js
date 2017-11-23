import $ from 'jquery';
//导航
$('.nav_main li').hover(function(){
    var nav_text = $(this).find('a').text();
    if(nav_text=='Home'){
        $(this).find('a').text('首页');
    }else if(nav_text=='FrontEnd'){
        $(this).find('a').text('前端资讯');
    }else if(nav_text=='Inspiration'){
        $(this).find('a').text('创意灵感');
    }else if(nav_text=='UI Design'){
        $(this).find('a').text('UI设计');
    }else if(nav_text=='Interactive'){
        $(this).find('a').text('交互设计');
    }else if(nav_text=='About'){
        $(this).find('a').text('关于');
    }
},function(){
    $('.nav_main li:eq(0)').find('a').text('Home');
    $('.nav_main li:eq(1)').find('a').text('FrontEnd');
    $('.nav_main li:eq(2)').find('a').text('Inspiration');
    $('.nav_main li:eq(3)').find('a').text('UI Design');
    $('.nav_main li:eq(4)').find('a').text('Interactive');
    $('.nav_main li:eq(5)').find('a').text('About');
});

//搜索
$('.nav_search').click(function(){
    $('.nav_search_open').fadeIn(100,function(){
        $('.nav_search_form').fadeIn(300);
        $('.nav_search_form input.text').focus();
    });
});
$('.nav_search_open').click(function(){
    $('.nav_search_open').hide();
});
$('.nav_search_form').click(function(event){
    event.stopPropagation();
});