const $screenWidth = $(window).width();
$(window).on('load', function() {
    $('.envelope-front').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:500,
        easing: 'linear',
        complete:  backenvelope
    });
});
function backenvelope() {
    $('.envelope-front').animate({opacity: 0});
    var $elem = $('.envelope-back');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 500,
        step: function(now) {
            $elem.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        },
        easing: 'linear',
        complete:  setTimeout(rotateEnv, 1000)
    });
}
function rotateEnv() {
    let $rightOffset;
    if ($screenWidth < 1600 && $screenWidth > 1000 || $screenWidth < 350) {
        $rightOffset = '30%'
    } else if($screenWidth < 480) {
        $rightOffset = '35%'
    } else {
        $rightOffset = '39%'
    }
    $('.envelope-back').animate({ right: $rightOffset, rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
        },
        duration:500,
        easing: 'linear',
        complete:  setTimeout(openEnv, 700)
    });
}
function openEnv() {
    $('.cover-top').animate({rotateAngle: 180 }, {
        step: function(now,fx) {
            $(this).css({'-webkit-transform': 'rotateX('+now+'deg)','transform-origin': 'top'});
            $(this).css({'-moz-transform':'rotateX('+now+'deg)','transform-origin': 'top'});
            $(this).css({'transform':'rotateX('+now+'deg)','transform-origin': 'top'});
        },
        duration: 300,
        easing: 'linear'
    });
    $('.cover-top').animate({opacity: 0}, 200, 'linear');
    setTimeout(function () {
        $('.backwall-env').animate({opacity: 1}, 50, 'linear',setTimeout(cardMove, 300) );
    }, 300)
}

function cardMove() {
    let card = $('#card');
    let $leftOffset;
    let $topOffset;
    let $moveOffset;
    if ($screenWidth < 480) {
        $leftOffset = '90px';
        $topOffset = '-20px';
        $moveOffset = '-235px';
    } else {
        $leftOffset = '180px';
        $topOffset = '-40px';
        $moveOffset = '-480px';
    }
    card.animate({top: $moveOffset}, 600);
    setTimeout(function () {
        card.css('z-index', '2');
    }, 600);
    card.animate({top: $topOffset, left: $leftOffset}, 900, cardFlip);
}
function cardFlip() {
    $('.card-front').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:500,
        easing: 'linear',
        complete:  showCardBack
    });
}
function showCardBack() {
    $('.card-front').animate({opacity: 0});
    var $elem = $('.card-back');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 500,
        step: function(now) {
            $elem.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        },
        easing: 'linear',
        complete:  setTimeout(cardReturnFlip, 1500)
    });
}
function cardReturnFlip() {
    $('.card-back').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:500,
        easing: 'linear',
        complete:  showCardBackReturn
    });
}
function showCardBackReturn() {
    $('.card-back').animate({opacity: 0});
    var $elem = $('.card-front');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 500,
        step: function(now) {
            $elem.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        },
        easing: 'linear',
    });
}