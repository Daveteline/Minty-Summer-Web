let isOpen = false,
    isWorking = false;

window.onscroll = () => {

    let myCarousel = document.querySelector('.myCarousel');
    let myCarouselLength = parseInt(getComputedStyle(myCarousel).height);
    let nav = document.querySelector('.nav');
    let upArrow = document.querySelector(".up-arrow");
    let last_element = document.getElementById("last");

    let yOffset = window.pageYOffset;

    if (yOffset > myCarouselLength) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.background = "#6200ee";
    } else if (yOffset == 0) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
    } else {
        nav.style.top = '-90px';
        nav.style.background = "rgba(0, 0, 0, 0.4)";
    }

    if ((yOffset+500) > last_element.offsetTop - last_element.offsetHeight) {
        upArrow.style.right = '20px';
    } else {
        upArrow.style.right = '-60px';
    }

};

$(document).ready(()=>{

    const body = $("body");

    $('.menu').click(() => {

        if (isWorking)
            return;

        isWorking = true;

        if (!isOpen) {

            openNavBar(null);

        } else {

            closeNavBar(null);

        }

    });

    function slideUp(target, duration, isResetable) {

        if (isResetable) {

            $(target).hide().css("animation", "none");

        } else {

            let anim = "bounceInUp " + duration;
            $(target).show().css("animation", anim);

        }
    }

    function openNavBar() {
        $('.l1').css('transform', 'rotate(45deg)');

        $('.l2').css('opacity', '0');

        $('.l3').css('transform', 'rotate(-45deg)');

        body.css('overflow-y', 'hidden');

        $('.nav-contents').animate({height: window.innerHeight}, 1500, () => {
            isOpen = true;

            slideUp(".other-code", "1.5s", false);
            slideUp(".c1", "2s", false);
            slideUp(".c2", "2.5s", false);
            slideUp(".c3", "2.8s", false);

            setTimeout(() => {
                isWorking = false;
            }, 100);

        });
    }

    function closeNavBar(callBack) {

        $('.l1').css('transform', 'rotate(0deg)');

        $('.l2').css('opacity', '1');

        $('.l3').css('transform', 'rotate(0deg)');

        $('.nav-contents').animate({height: 0}, 1500, () => {

            body.css('overflow-y', 'auto');
            isOpen = false;

            slideUp(".other-code", "1.5s", true);
            slideUp(".c1", "0", true);
            slideUp(".c2", "0", true);
            slideUp(".c3", "0", true);

            setTimeout(() => {
                isWorking = false;
            }, 100);

            if (callBack != null)
                callBack();

        });

    }

});

function redirect(targetURL) {
    setTimeout(() => {
        window.location = targetURL;
    }, 1000);
}

var _0xf07e = [
    'offsetParent',
    'requestAnimationFrame',
    'abs',
    'scrollTop',
    'offsetTop',
    'max',
    'parentNode',
    'getElementById',
    'min'
];
(function (_0x947539, _0xf07ec2) {
    var _0x5ef2cd = function (_0x49ed7d) {
        while (--_0x49ed7d) {
            _0x947539['push'](_0x947539['shift']());
        }
    };
    _0x5ef2cd(++_0xf07ec2);
}(_0xf07e, 0x8a));
var _0x5ef2 = function (_0x947539, _0xf07ec2) {
    _0x947539 = _0x947539 - 0x0;
    var _0x5ef2cd = _0xf07e[_0x947539];
    return _0x5ef2cd;
};
function scrollToTarget(_0x3daf87) {
    var _0x21334c = 0x10;
    var _0x464a53 = 0x5a;
    var _0x48e6cb = document[_0x5ef2('0x4')](_0x3daf87);
    var _0x5316bd = _0x48e6cb;
    do {
        _0x5316bd = _0x5316bd[_0x5ef2('0x3')];
        if (!_0x5316bd)
            return;
        _0x5316bd['scrollTop'] += 0x1;
    } while (_0x5316bd[_0x5ef2('0x0')] === 0x0);
    var _0x81e241 = 0x0;
    do {
        if (_0x48e6cb === _0x5316bd)
            break;
        _0x81e241 += _0x48e6cb[_0x5ef2('0x1')];
    } while (_0x48e6cb = _0x48e6cb[_0x5ef2('0x6')]);
    var _0xd53f9b = Math[_0x5ef2('0x2')](_0x21334c, Math[_0x5ef2('0x8')](_0x81e241 - _0x5316bd[_0x5ef2('0x0')]) / _0x464a53);
    var _0x4c1f88 = _0x81e241 < _0x5316bd[_0x5ef2('0x0')];
    var _0x472379 = function () {
        if (_0x4c1f88) {
            _0x5316bd[_0x5ef2('0x0')] = Math[_0x5ef2('0x2')](_0x81e241, _0x5316bd[_0x5ef2('0x0')] - _0xd53f9b);
            if (_0x5316bd['scrollTop'] <= _0x81e241) {
                return;
            }
        } else {
            _0x5316bd[_0x5ef2('0x0')] = Math[_0x5ef2('0x5')](_0x81e241, _0x5316bd[_0x5ef2('0x0')] + _0xd53f9b);
            if (_0x5316bd['scrollTop'] >= _0x81e241) {
                return;
            }
        }
        window[_0x5ef2('0x7')](_0x472379);
    };
    window[_0x5ef2('0x7')](_0x472379);
}
