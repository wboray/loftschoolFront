document.addEventListener("DOMContentLoaded", function(event) { 
    const sheetCommand = document.querySelector('#sheet-command');
    const sheetCommandItems = document.querySelectorAll('.sheet-command__people');
    


    sheetCommand.addEventListener('click', function(event){
        event.preventDefault();

        let target = event.target;
        //console.log(target);
        if (target.parentNode.classList.contains('sheet-command__title')){
            let sheetCommandContent = target.parentNode;

            sheetCommandItems.forEach(element => {
                if (element != sheetCommandContent.parentNode.parentNode) element.classList.remove('active');    
            });
            sheetCommandContent.parentNode.parentNode.classList.toggle('active');
        }
    })


})