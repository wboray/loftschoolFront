document.addEventListener("DOMContentLoaded", function(event) { 


    const hamburgerOverlay = document.querySelector('#hamburger-overlay');
    const hamburgerOverlayClose = document.querySelector('#hamburger-overlay__close');
    const navMainItem = document.querySelectorAll('#nav-main__list>li');
    
    const navigationFixed = document.querySelector('.navigation');
    var navMainItemLink;

    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const classes = ['active', 'hidden'];
    const elements = [hamburgerOverlay, body];

    //при заходе по ссылке
    if(window.location.hash && window.location.hash !== '#') {
        //let section = document.querySelector(window.location.hash).offsetTop;
        //gotoSection(html, section, 600);
        //тут нужно вызвать клик по соответствующей точки фиксед меню
        navMainItemLink = document.querySelector('#nav-main__list>li>a[href="' + window.location.hash + '"]');
        console.log(navMainItemLink);
        if (typeof navMainItemLink == 'object')navMainItemLink.dispatchEvent(new MouseEvent('click'));
    }

    //при кликах на меню
    hamburgerOverlay.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(123);
        

        if (event.target.id == 'hamburger-overlay' && window.innerWidth <= 768){
            _toggleClass(elements, classes);
        }else{
            let target = event.target;
            console.log(123);
            if (typeof target.getAttribute('href') !== "null"){
                if (target.getAttribute('href') !== '#'){
                    let section = document.querySelector(target.getAttribute('href')).offsetTop;
                    if (window.innerWidth <= 768)_toggleClass(elements, classes);
                    gotoSection(html, section, 600);
                    

                    //устанавливаем активный у фиксед меню
                    console.log(window.location.hash);
                    console.log(target.getAttribute('href'));
                    if (window.location.hash != target.getAttribute('href')){
                        navigationFixed.querySelectorAll('.navigation__page').forEach(element => {
                            console.log(element);
                            if (element.getAttribute('href') != target.getAttribute('href')){
                                element.parentNode.classList.remove('active');
                            }else if(element.getAttribute('href') == target.getAttribute('href')){
                                element.parentNode.classList.add('active');   
                            }
                            //console.log(element);
                        });

                        window.location.hash = target.getAttribute('href');
                    }
                }
            }
        }
    })

    //при кликах на фиксед меню => точки
    navigationFixed.addEventListener('click', function(event) {
        event.preventDefault();
        //alert('1');
        let target = event.target;
        navMainItemLink = document.querySelector('#nav-main__list>li>a[href="' + target.getAttribute('href') + '"]');
        //console.log(navMainItemLink);
        if (navMainItemLink != null){
            navMainItemLink.click();
        } else if (target.getAttribute('href') == '#' || target.getAttribute('href') == '#sheet-first' ){
            gotoSection(html, 0, 600);    
        }
        /*
        if (typeof target.getAttribute('href') !== "null"){
            let section = document.querySelector(target.getAttribute('href')).offsetTop;
            gotoSection(html, section, 600);
            window.location.hash = target.getAttribute('href');   
        }/**/
    })


})