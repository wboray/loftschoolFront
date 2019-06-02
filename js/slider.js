document.addEventListener("DOMContentLoaded", function(event) { 


    let sliders = ['#slider-sheet-chocco'];


    sliders.forEach(element => {
        let excludeArray = ['btn'];

        let slider = document.querySelector(element);
        let arrowLeft = document.querySelector(element + '>.slider__left')
        let arrowRight = document.querySelector(element + '>.slider__right')
        let items = document.querySelector(element + '>.slider__items')
        let itemArray = [];
        let itemActive;

        //console.log(arrowLeft);
        //console.log(arrowRight);
        //addElem(slider);
        //console.log(sliders);

        //инициализация слайдера
        let i = 0;
        items.childNodes.forEach(element => {
            if (element.classList !== undefined && element.classList.contains('slider__item')){
                itemArray[i] = element;
                if (i == 0){
                    itemActive = 0;
                    //itemArray[0].setAttribute('data-item-active', 'active');
                    itemArray[0].dataset.itemActive = 'active';
                }else if (element.dataset.itemActive == 'active'){
                    itemActive = i;
                    itemArray[0].dataset.itemActive = '';
                }
                i++;
            }
        })
        if (itemArray.length <= 1) return;//если нет слайдов, то значит не куртим их

        if (itemActive > 0) gotoSlide(itemActive);
        
 
        slider.addEventListener('click', function(event){
            if (searchInArray(event.target.classList, excludeArray)){
                //элемент исключения, не будем забирать у него управление
                console.log('исключение');
            }else{
                event.preventDefault();
                if (event.target == arrowLeft && itemActive > 0){
                    itemActive--;
                    gotoSlide(itemActive);
                }else if (event.target == arrowRight  && itemActive < (itemArray.length - 1)){
                    itemActive++;
                    gotoSlide(itemActive);
                }
            }
        })

        function gotoSlide(item){
            itemArray.forEach(element => {
                element.style.left = ('-' + item * 100 + '%');
            })
        }        

        function searchInArray(needle, haystack){
            let result = false;
            needle.forEach(element => {
                if (!haystack.indexOf(element)){
                    result = true;
                    return;
                }
                
            })
            return result;
        }

    });

/*
    const sliderSheetChocco1 = document.querySelector('#slider-sheet-chocco');

    sliderSheetChocco.addEventListener('click' function(event){

        console.log(event);

    })
*/






})