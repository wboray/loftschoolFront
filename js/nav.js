window.addEventListener("load", function(event) { 


    const hamburgerOverlay = document.querySelector('#hamburger-overlay');
    const hamburgerOverlayClose = document.querySelector('#hamburger-overlay__close');
    const fixedMenu = document.querySelector('#fp-nav');
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

        if (event.target.id == 'hamburger-overlay' && window.innerWidth <= 768){
            _toggleClass(elements, classes);
        }else{
            let target = event.target;
            if (typeof target.getAttribute('href') !== "null"){
                if (target.getAttribute('href') !== '#'){
                    /*
                    let section = document.querySelector(target.getAttribute('href')).offsetTop;
                    if (window.innerWidth <= 768 && !firstLoad)_toggleClass(elements, classes);
                    gotoSection(html, section, 600);
                    
                    navigationPageActive(target);*/
                    if (window.innerWidth <= 768)_toggleClass(elements, classes);
                    window.location.hash = target.getAttribute('href');
                }
            }
        }
        if (hamburgerOverlay.classList.contains('active')) {
            fixedMenu.style.display = 'none';
        }else{
            fixedMenu.style.display = 'flex';
        }
        //firstLoad = false;
    })
/*
    //при кликах на фиксед меню => точки
    navigationFixed.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        navMainItemLink = document.querySelector('#nav-main__list>li>a[href="' + target.getAttribute('href') + '"]');
        if (navMainItemLink != null){
            navMainItemLink.click();
        } else if (target.getAttribute('href') == '#' || target.getAttribute('href') == '#sheet-first'){
            navigationPageActive(target);
            gotoSection(html, 0, 600);
            window.location.hash = target.getAttribute('href');
        } else if (target.getAttribute('href') == '#sheet-form'){
            let section = document.querySelector(target.getAttribute('href')).offsetTop;
            navigationPageActive(target);
            gotoSection(html, section, 600);
            window.location.hash = target.getAttribute('href');
        }
    })

    //при заходе по ссылке
    if(window.location.hash && window.location.hash !== '#' && window.location.hash !== '#sheet-form') {
        navMainItemLink = document.querySelector('#nav-main__list>li>a[href="' + window.location.hash + '"]');
        if (typeof navMainItemLink == 'object')navMainItemLink.click();
    }    
*/

/*
    new fullpage('#fullpage', {
        licenseKey: "D2DB0F76-42B04C3A-938789B7-AE7D1A8F",
        anchors: [
            'slide1',
            'slide2'
        ],
        //responsiveWidth: responsiveWidth,
        //responsiveHeight: responsiveHeight,
        verticalCentered: false,
        scrollingSpeed: 1000,
        menu: '#fixedMenu',
        navigation: true
    });
    
    //methods
    fullpage_api.setAllowScrolling(false);*/

    

	
})