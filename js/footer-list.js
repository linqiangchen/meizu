$('.down').hover(function(){
    $('.nav-list ul').css({'transition': '0.5s','height':"200px"});
    $('.nav-list ').css('background','#fff');
    $('.top li  a').css( 'color','#333');
},function(){
    $('.nav-list ul').css({'transition': '0s','height':"0px"});
    $('.nav-list ').css('background','transparent');
})
$('.nav-list').hover(function(){
    $('.nav-list ').css('background','#fff');
    $('.top li a').css( 'color','#333');
    $('.nav-list ul').css('height','200px');
},function(){
    $('.nav-list ul').css({'transition': '0s','height':"0px"});
    $('.nav-list ').css('background','transparent');
});
$('.nav-list ul li').hover(function(){
    $(this).css('opacity','1');
    $(this).siblings().css('opacity','0.6');
},function(){
})