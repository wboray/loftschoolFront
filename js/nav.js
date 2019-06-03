document.addEventListener("DOMContentLoaded", function(event) { 


const hamburgerOverlay = document.querySelector('#hamburger-overlay');
//const hamburge = document.querySelector('#hamburger');
const hamburgerOverlayClose = document.querySelector('#hamburger-overlay__close');
const navMainItem = document.querySelectorAll('#nav-main__list>li');
const body = document.querySelector('body');
const html = document.querySelector('html');
const classes = ['active', 'hidden'];
const elements = [hamburgerOverlay, body];

/*
hamburgerOverlayClose.addEventListener('click', function(event) {
    hamburgerOverlay.classList.toggle('active');
    body.classList.remove('hidden');
})*/

hamburgerOverlay.addEventListener('click', function(event) {
    event.preventDefault();

    //console.log(event.target.id);
    //!hamburgerOverlay.classList.contains('active') || 
    if (event.target.id == 'hamburger-overlay'){
        _toggleClass(elements, classes);
    }else{
        const target = event.target;
        //console.log(target.getAttribute('href'));
        if (typeof target.getAttribute('href') !== "null"){
            if (target.getAttribute('href') !== '#'){
                let section = document.querySelector(target.getAttribute('href')).offsetTop;
                _toggleClass(elements, classes);
                gotoSection(html, section, 600);
            }
        }
    }
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
})