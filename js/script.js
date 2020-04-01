const $screenWidth = $(window).width();
$( document ).ready(function() {
    $('.envelope-front').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:1500,
        easing: 'linear',
        complete:  backenvelope
    });
});
function backenvelope() {
    $('.envelope-front').animate({opacity: 0});
    var $elem = $('.envelope-back');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 1500,
        step: function(now) {
            $elem.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        },
        easing: 'linear',
        complete:  setTimeout(rotateEnv, 2000)
    });
}
function rotateEnv() {
    let $rightOffset;
    if ($screenWidth < 1600 && $screenWidth > 1200) {
        $rightOffset = '30%'
    } else if ($screenWidth < 1200) {
        $rightOffset = '23%'
    } else {
        $rightOffset = '39%'
    }
    $('.envelope-back').animate({ right: $rightOffset, rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
        },
        duration:1500,
        easing: 'linear',
        complete:  setTimeout(openEnv, 1000)
    });
}
function openEnv() {
    // $('.cover-top').animate({rotateAngle: -180 }, {
    //     step: function(now,fx) {
    //         $(this).css({'-webkit-transform': 'rotateX('+now+'deg)','transform-origin': 'top'});
    //         $(this).css({'-moz-transform':'rotateX('+now+'deg)','transform-origin': 'top'});
    //         $(this).css({'transform':'rotateX('+now+'deg)','transform-origin': 'top'});
    //     },
    //     duration: 1500,
    //     easing: 'linear'
    // });
    $('.cover-top').animate({opacity: 0}, 200, 'linear', backwallAppear );

}

function backwallAppear() {
    $('.backwall-env').animate({opacity: 1}, 200, cardMove );
}
function cardMove() {
    let card = $('#card');
    card.animate({top:'-480px'}, 1500);
    setTimeout(function () {
        card.css('z-index', '2');
    }, 1500);
    card.animate({top:'-40px', left:'180px'}, 1500, cardFlip);
}
function cardFlip() {
    $('.card-front').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:1500,
        easing: 'linear',
        complete:  showCardBack
    });
}
function showCardBack() {
    $('.card-front').animate({opacity: 0});
    var $elem = $('.card-back');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 1500,
        step: function(now) {
            $elem.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        },
        easing: 'linear',
        complete:  setTimeout(cardReturnFlip, 2000)
    });
}
function cardReturnFlip() {
    $('.card-back').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:1500,
        easing: 'linear',
        complete:  showCardBackReturn
    });
}
function showCardBackReturn() {
    $('.card-back').animate({opacity: 0});
    var $elem = $('.card-front');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 1500,
        step: function(now) {
            $elem.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        },
        easing: 'linear',
        // complete:  setTimeout(rotateEnv, 2000)
    });
}