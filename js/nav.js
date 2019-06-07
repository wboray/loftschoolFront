document.addEventListener("DOMContentLoaded", function(event) { 


    const hamburgerOverlay = document.querySelector('#hamburger-overlay');
    const hamburgerOverlayClose = document.querySelector('#hamburger-overlay__close');
    const navMainItem = document.querySelectorAll('#nav-main__list>li');
    
    const navigationFixed = document.querySelector('.navigation');
    var navMainItemLink;
    var firstLoad = true;

    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const classes = ['active', 'hidden'];
    const elements = [hamburgerOverlay, body];

    function navigationPageActive(target){
        navigationFixed.querySelectorAll('.navigation__page').forEach(element => {
            //console.log(element);
            if (element.getAttribute('href') != target.getAttribute('href')){
                element.parentNode.classList.remove('active');
            }else if(element.getAttribute('href') == target.getAttribute('href')){
                element.parentNode.classList.add('active');   
            }
        });
    }

    //при кликах на меню
    hamburgerOverlay.addEventListener('click', function(event) {
        event.preventDefault();
        

        if (event.target.id == 'hamburger-overlay' && window.innerWidth <= 768 && !firstLoad){
            _toggleClass(elements, classes);
        }else{
            let target = event.target;
            if (typeof target.getAttribute('href') !== "null"){
                if (target.getAttribute('href') !== '#'){
                    let section = document.querySelector(target.getAttribute('href')).offsetTop;
                    if (window.innerWidth <= 768 && !firstLoad)_toggleClass(elements, classes);
                    gotoSection(html, section, 600);
                    
                    navigationPageActive(target);

                    window.location.hash = target.getAttribute('href');
                }
            }
        }

        firstLoad = false;
    })

    //при кликах на фиксед меню => точки
    navigationFixed.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        navMainItemLink = document.querySelector('#nav-main__list>li>a[href="' + target.getAttribute('href') + '"]');
        if (navMainItemLink != null){
            navMainItemLink.click();
        } else if (target.getAttribute('href') == '#' || target.getAttribute('href') == '#sheet-first' ){
            navigationPageActive(target);
            gotoSection(html, 0, 600);    
        }
    })

    //при заходе по ссылке
    if(window.location.hash && window.location.hash !== '#') {
        navMainItemLink = document.querySelector('#nav-main__list>li>a[href="' + window.location.hash + '"]');
        if (typeof navMainItemLink == 'object')navMainItemLink.click();
    }    




})