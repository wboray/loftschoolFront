document.addEventListener("DOMContentLoaded", function(event) { 


const hamburgerOverlay = document.querySelector('#hamburger-overlay');
const hamburge = document.querySelector('#hamburger');
const hamburgerOverlayClose = document.querySelector('#hamburger-overlay__close');
const navMainItem = document.querySelectorAll('#nav-main__list>li');
const body = document.querySelector('body');
const html = document.querySelector('html');
const classes = ['active', 'hidden'];
const elements = [hamburgerOverlay, body];

hamburgerOverlayClose.addEventListener('click', function(event) {
    hamburgerOverlay.classList.toggle('active');
    body.classList.remove('hidden');
})

hamburger.addEventListener('click', function(event) {
    hamburgerOverlay.classList.toggle('active');
    body.classList.toggle('hidden');
})

/* не нада вешать события лишние
navMainItem.forEach(function(element){
    element.addEventListener('click', function(event) {
        event.preventDefault();

        let elHref = this.querySelector('a.nav-main__link').getAttribute('href');
        if (elHref !== '#'){
            let section = document.querySelector(elHref).offsetTop;
            gotoSection(html, section, 600);
        }
    });
});
*/
hamburgerOverlay.addEventListener('click', function(event) {
    event.preventDefault();

    const target = event.target;
    //console.log(target.getAttribute('href'));
    if (typeof target.getAttribute('href') !== "null" && target.getAttribute('href') !== '#'){
        let section = document.querySelector(target.getAttribute('href')).offsetTop;
        gotoSection(html, section, 600);
    }
    
})

function gotoSection(element, to, duration){
    var start = element.scrollTop;
    change = to - start;
    currentTime = 0;
    increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);

        element.scrollTop = val;
        if(currentTime < duration){
            setTimeout(animateScroll, increment);
        } else {
            _toggleClass(elements, classes);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function(t, b, c, d){
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t  + b;
    t--;
    return (-c / 2) * (t * (t - 2) -1) + b;

}

const _toggleClass = (element, className) => {
    element.forEach((item, index) => item.classList.toggle(className[index]));
}

})