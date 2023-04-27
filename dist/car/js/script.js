const slider = tns({
    container: '.carousel__inner',
    items: 3,
    slideBy: 1,
    controls: false,
    nav: false
  });
document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
});


const slider_adv = tns({
    container: '.advantages__inner',
    items: 1,
    slideBy: 1,
    controls: false
  });
document.querySelector('.prev_adv').addEventListener ('click', function () {
    slider_adv.goTo('prev');
});
document.querySelector('.next_adv').addEventListener ('click', function () {
    slider_adv.goTo('next');
});

const slider_advsecond = tns({
    container: '.advantages__inner-second',
    items: 1,
    slideBy: 1,
    controls: false
  });
document.querySelector('.prev_adv-second').addEventListener ('click', function () {
    slider_advsecond.goTo('prev');
});
document.querySelector('.next_adv-second').addEventListener ('click', function () {
    slider_advsecond.goTo('next');
});