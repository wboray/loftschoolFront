window.addEventListener("load", function(event) { 


    const hamburgerOverlay = document.querySelector('#hamburger-overlay');
    const hamburgerOverlayClose = document.querySelector('#hamburger-overlay__close');
    const fixedMenu = document.querySelector('#fp-nav');
    const navMainItem = document.querySelectorAll('#nav-main__list>li');
    
    const navigationFixed = document.querySelector('.navigation');
    let navMainItemLink;
    let firstLoad = true;

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

    //console.log(hamburgerOverlay);
    hamburgerOverlay.addEventListener('click', function(event) {
        event.preventDefault();
        //debugger;
        


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
        if (hamburgerOverlay.classList.contains('active') || window.innerWidth <= 768) {
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
//при кликах на кнопке
const btngo = document.querySelectorAll('.btn[data-goto-form="1"]')
btngo.forEach(element => {
    if (typeof element == 'object') element.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.hash = 'sheetform';
    })
});


const md = new MobileDetect(window.navigator.userAgent);

	 
// && $(window).outerHeight() > 1050
//
function fp(responsiveWidth, responsiveHeight){ 
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: "D2DB0F76-42B04C3A-938789B7-AE7D1A8F",
        anchors: [
                    'sheetfirst', 
                    'sheetwhy', 
                    'sheetchocco',
                    'sheetcommand',
                    'sheetmenu',
                    'sheetreviews',
                    'sheethowwork',
                    'sheetform',
                    'sheetcontact'
                ],
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: false,
        scrollingSpeed: 1000,
        responsiveWidth: responsiveWidth,
        responsiveHeight: responsiveHeight
        //navigationTooltips: ['First page', 'Second page', 'Third and last page']
    });
}

if ($(window).outerWidth() <= 480 && md.mobile()){
    let responsiveWidth = 480;
    let responsiveHeight = false;
    fp(responsiveWidth, responsiveHeight);
}else if ($(window).outerWidth() <= 768 && md.mobile()){
    let responsiveWidth = 768;
    let responsiveHeight= false;
    fp(responsiveWidth, responsiveHeight);
}else {
    let responsiveWidth = 768;
    let responsiveHeight = 650;
    fp(responsiveWidth, responsiveHeight);
}
    

	
})