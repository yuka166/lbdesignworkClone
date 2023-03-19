function ChangeSlide() {
    let banner = document.getElementsByClassName('banner');
    let prevBtn = document.getElementsByClassName('prevBtn');
    let nextBtn = document.getElementsByClassName('nextBtn');
    let textOutline = document.querySelectorAll('.text-outline');
    let primaryText = document.querySelectorAll('.primary-text-center');
    let secondaryText = document.querySelectorAll('.banner-secondary-text');
    let bannerBtn = document.querySelectorAll('.banner-action-btn');

    function setzIndex(item, button1, button2) {
        button1.disabled = true;
        button2.disabled = true;
        item.style.zIndex = 3;
        setTimeout(() => {
            button1.disabled = false;
            button2.disabled = false;
            item.style.zIndex = 1;
        }, 1200)
    }

    function FloatUpAnimate(item, item2, item3, item4) {

        const FloatUpAnimation = [
            {
                transform: 'translate(0, 100%) rotate(-35deg)'
            },
            {
                transform: 'translate(0, 0) rotate(0)'
            }
        ];

        const FloatUpTiming = {
            duration: 350,
            fill: 'forwards'
        }

        let timeout = 0;

        let splitted = item.querySelectorAll('div');
        for (let i = 0; i < splitted.length; i++) {
            timeout = 80 * (i + 1)
            setTimeout(() => {
                splitted[i].animate(FloatUpAnimation, FloatUpTiming)
            }, timeout)
        }
        setTimeout(() => {
            ShowUpAnimate(item2, '100%', '50%')
        }, timeout - 80)

        setTimeout(() => {
            ShowUpAnimate(item3, '65%', '55%')
        }, timeout + 500 - 80)

        setTimeout(() => {
            ShowUpAnimate(item4, '80%', '70%')
        }, timeout + 900 - 80)
    }

    setTimeout(() => {
        FloatUpAnimate(textOutline[0], primaryText[0], secondaryText[0], bannerBtn[0]);
    }, 200)

    function FloatDownAnimate(item, item2, item3, item4) {

        const FloatDownAnimation = [
            {
                transform: 'translate(0, 0) rotate(0)'
            },
            {
                transform: 'translate(0, 100%) rotate(-35deg)'
            }
        ];

        const FloatDownTiming = {
            duration: 0,
            fill: 'forwards'
        }

        let splitted = item.querySelectorAll('div');
        for (let i = 0; i < splitted.length; i++) {
            splitted[i].animate(FloatDownAnimation, FloatDownTiming)
        }

        HideShowUpAnimate(item2);
        HideShowUpAnimate(item3);
        HideShowUpAnimate(item4);
    }

    function ShowUpAnimate(item, topstart, topend) {
        const ShowUpAnimation = [
            {
                top: topstart,
                opacity: '0'
            },
            {
                top: topend,
                opacity: '1'
            }
        ];

        const ShowUpTiming = {
            duration: 1200,
            fill: 'forwards',
            easing: 'cubic-bezier(0.83, 0, 0.17, 1)'
        }
        item.animate(ShowUpAnimation, ShowUpTiming)
    }

    function HideShowUpAnimate(item) {
        const HideShowUpAnimation = [
            {
                opacity: '1'
            },
            {
                opacity: '0'
            }
        ];

        const HideShowUpTiming = {
            duration: 0,
            fill: 'forwards'
        }
        item.animate(HideShowUpAnimation, HideShowUpTiming)
    }

    for (let i = 0; i < banner.length; i++) {
        prevBtn[i].addEventListener('click', () => {
            banner[i].setAttribute('data-status', 'none')
            setzIndex(banner[i], prevBtn[i], nextBtn[i]);
            FloatDownAnimate(textOutline[i],
                primaryText[i],
                secondaryText[i],
                bannerBtn[i]);
            if (i - 1 < 0) {
                banner[banner.length - 1].setAttribute('data-status', 'active')
                banner[banner.length - 1].style.zIndex = 2;
                setTimeout(() => {
                    FloatUpAnimate(textOutline[banner.length - 1],
                        primaryText[banner.length - 1],
                        secondaryText[banner.length - 1],
                        bannerBtn[banner.length - 1]);
                }, 500)
            }
            else {
                banner[i - 1].setAttribute('data-status', 'active')
                banner[i - 1].style.zIndex = 2;
                setTimeout(() => {
                    FloatUpAnimate(textOutline[i - 1],
                        primaryText[i - 1],
                        secondaryText[i - 1],
                        bannerBtn[i - 1]);
                }, 500)
            }
        })

        nextBtn[i].addEventListener('click', () => {
            banner[i].setAttribute('data-status', 'none')
            setzIndex(banner[i], prevBtn[i], nextBtn[i]);
            FloatDownAnimate(textOutline[i],
                primaryText[i],
                secondaryText[i],
                bannerBtn[i]);
            if (i + 1 === banner.length) {
                banner[0].setAttribute('data-status', 'active')
                banner[0].style.zIndex = 2;
                setTimeout(() => {
                    FloatUpAnimate(textOutline[0],
                        primaryText[0],
                        secondaryText[0],
                        bannerBtn[0]);
                }, 500)
            }
            else {
                banner[i + 1].setAttribute('data-status', 'active')
                banner[i + 1].style.zIndex = 2;
                setTimeout(() => {
                    FloatUpAnimate(textOutline[i + 1],
                        primaryText[i + 1],
                        secondaryText[i + 1],
                        bannerBtn[i + 1]);
                }, 500)
            }
        })
    }
}

ChangeSlide();