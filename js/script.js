const $screenWidth = $(window).width();
$(window).on('load', function() {
    $('.main-container').animate({opacity: 1}, 100, 'linear', setTimeout(start, 1000));
});
function start(){
    $('.envelope-front').animate({ rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotateY('+now+'deg)');
            $(this).css('-moz-transform','rotateY('+now+'deg)');
            $(this).css('transform','rotateY('+now+'deg)');
        },
        duration:400,
        easing: 'linear',
        complete:  backenvelope
    });
    $('.envelope-front').animate({opacity: 0}, 100);
}
function backenvelope() {
    var $elem = $('.envelope-back');
    $elem.animate({opacity: 1});
    $({deg: -90}).animate({deg: 0}, {
        duration: 400,
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
    let $rightOffset = '22%';
    // if($screenWidth < 768) {
    //     $rightOffset = '22%'
    // } else {
    //     $rightOffset = '22%'
    // }
    $('.envelope-back').animate({ top: '0', rotateAngle: 90 }, {
        step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
        },
        duration:500,
        easing: 'linear',
        complete:  setTimeout(openEnv, 700)
    });
    $('.envelope').animate({right: $rightOffset})
}
function openEnv() {
    $('.cover-top').animate({rotateAngle: 180 }, {
        step: function(now,fx) {
            $(this).css({'-webkit-transform': 'rotateX('+now+'deg)','transform-origin': 'top'});
            $(this).css({'-moz-transform':'rotateX('+now+'deg)','transform-origin': 'top'});
            $(this).css({'transform':'rotateX('+now+'deg)','transform-origin': 'top'});
        },
        duration: 200,
        easing: 'linear'
    });
    $('.cover-top').animate({opacity: 0}, 100, 'linear');
    setTimeout(function () {
        $('.backwall-env').animate({opacity: 1}, 50, 'linear',setTimeout(cardMove, 200) );
    }, 200)
}

function cardMove() {
    let card = $('#card');
    let $leftOffset;
    let $topOffset;
    let $moveOffset;
    if ($screenWidth < 769) {
        $leftOffset = '70px';
        $topOffset = '-20px';
        $moveOffset = '-185px';
    } else {
        $leftOffset = '140px';
        $topOffset = '-35px';
        $moveOffset = '-350px';
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