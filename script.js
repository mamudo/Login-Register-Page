/*
There are bunch of solutions to switch screens (forms). Here pick a one:

#Solition 2
*/

$(document).ready(function (){
    $(".message a").click(function (){
        $(".register-form").toggle("slow");
    });
    $(".message a").click(function (){
        $(".login-form").toggle("slow");
    });
});


/*
#Solition 2

$(document).ready(function (){
    $('.message a').click(function(){
        $('.register-form').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('.login-form').animate({height: "toggle", opacity: "toggle"}, "slow");
    })
});


#Solition 3
ready(function (){
    $(".message a").click(function (){
        $(".register-form").toggle("fold");
    });
    $(".message a").click(function (){
        $(".login-form").toggle("fold");
    });
});

*/


