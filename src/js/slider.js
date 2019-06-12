document.addEventListener("DOMContentLoaded", function(event) { 


    let sliders = ['#slider-sheet-chocco'];


    sliders.forEach(element => {
        let excludeArray = ['btn'];

        let slider = document.querySelector(element);
        let arrowLeft = document.querySelector(element + '>.slider__left')
        let arrowRight = document.querySelector(element + '>.slider__right')
        let items = document.querySelector(element + '>.slider__items')
        let itemArray = [];
        let cloneFirst;
        let cloneEnd;
        let itemActive;

        //клонирование первого и последнего элемента,
        //что бы прокрутка была бесконечной


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

        
        //вставляем клоны первого и последнего элемента
        cloneFirst = itemArray[0].cloneNode(true);
        items.appendChild(cloneFirst);
        cloneEnd = itemArray[itemArray.length - 1].cloneNode(true);
        items.insertBefore(cloneEnd, items.children[0]);
        //после вставки нужно пересчитать массив итемов
        let itemArrayWithClone = [];
        itemArrayWithClone[0] = cloneFirst;
        i = 0;
        itemArray.forEach(element => {
            i++;
            itemArrayWithClone[i] = element;
        });
        i++
        itemArrayWithClone[i] = cloneEnd;
        itemActive++;

        itemArray = itemArrayWithClone;



        if (itemActive > 0) gotoSlide(itemActive);

        slider.addEventListener('click', function(event){
            if (searchInArray(event.target.classList, excludeArray)){
                //элемент исключения, не будем забирать у него управление
                console.log('исключение');
            }else{
                event.preventDefault();
                let revers = 0;
                if (event.target == arrowLeft && itemActive > 0){
                    itemActive--;
                    if (itemActive == 0) revers = 1;
                    gotoSlide(itemActive, revers);
                }else if (event.target == arrowRight  && itemActive < (itemArray.length - 1)){
                    itemActive++;
                    if (itemActive == itemArray.length - 1) revers = 2;
                    gotoSlide(itemActive, revers);
                }
            }
        })

        function gotoSlide(item, revers){
            itemArray[0].removeEventListener("transitionend", transitionEnd);
            itemArray.forEach(element => {
                element.style.left = ('-' + item * 100 + '%');
                element.style.transition = 'left 0.5s ease 0s';
            })
            if (revers > 0){
                //console.log(revers);
                itemArray[0].addEventListener('transitionend', transitionEnd())
                
                //debugger;
            }

            function transitionEnd(){
                //console.log(1);
                setTimeout(function() {
                    itemArray.forEach(element => {
                        element.style.transition = 'unset';
                    })
                    itemArray.forEach(element => {
                        if (revers == 1){
                            element.style.left = ('-' + 100 * (itemArray.length - 2) + '%');
                            itemActive = itemArray.length - 2;
                        }else if(revers == 2){
                            element.style.left = ('-100%');
                            itemActive = 1;
                        }
                    })/**/
                    //debugger;
                }, 500);    
               
            } 
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