document.addEventListener("DOMContentLoaded", function(event) { 

    let items  = document.querySelectorAll('.sliderTwo-item');
    let itemArrow = document.querySelector('.sheet-reviews__peoples');
    let itemsArrow = document.querySelectorAll('.sheet-reviews__peoples-item');
    let activeItem = 0;    

    let i = 0;
    items.forEach(element => {
        element.setAttribute('data-index-slide', i);
        i++;
    });
    i = 0;
    itemsArrow.forEach(element => {
        element.setAttribute('data-index-arrow', i);
        i++;
    });

    itemArrow.addEventListener('click', function(event){
        event.preventDefault();
        let target = event.target;
        //console.log(target.parentElement);
        //console.log(target.parentElement.parentElement);
        //debugger;

        if (target.parentElement.classList.contains('sheet-reviews__people')){
            if (!target.parentElement.parentElement.classList.contains('active')){

                items.forEach(element => {
                    element.classList.remove('active');
                    element.classList.add('outactive');
                });
                itemsArrow.forEach(element => {
                    element.classList.remove('active');
                });

                //console.log(target.parentElement.parentElement.dataset.indexArrow);
                items[target.parentElement.parentElement.dataset.indexArrow].classList.add('active');
                target.parentElement.parentElement.classList.add('active');
            }

        }
        //if (target.)
    })


})