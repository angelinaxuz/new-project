$(document).ready(function (){
    let link = $('.nav > a')
    link.hover(function(){
        $(this).css({"border": "1px solid red", "padding": "10px"});
    }, function (){
        $(this).css({"border": "none", "padding": "none"});
    });


});
