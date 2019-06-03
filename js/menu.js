document.addEventListener("DOMContentLoaded", function(event) { 


    let menuSheet = document.querySelector('.sheet-menu__accordion-items');

    menuSheet.addEventListener('click', function(event){
        event.preventDefault();

        let target = event.target;

        //console.log(event.target);
        if(target.classList.contains('sheet-menu__accordion-item')){
            managerMenu(target);
        }else if(target.classList.contains('sheet-menu__accordion-item-background')){
            managerMenu(target.parentNode);
        }else if (target.parentNode.classList.contains('sheet-menu__accordion-item-background')){
            managerMenu(target.parentNode.parentNode);
        }
    })

    function managerMenu(menuItem){
        if (menuItem.classList.contains('sheet-menu__accordion-item--active')){
            menuItem.classList.remove('sheet-menu__accordion-item--active')
        }else{
            menuSheet.childNodes.forEach(element => {
                
                if (element.localName == 'li'){
                    element.classList.remove('sheet-menu__accordion-item--active')
                }
            });
            menuItem.classList.add('sheet-menu__accordion-item--active');
        }
    }

})