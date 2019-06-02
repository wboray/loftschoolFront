document.addEventListener("DOMContentLoaded", function(event) { 
    const sheetCommand = document.querySelector('#sheet-command');


    sheetCommand.addEventListener('click', function(event){
        event.preventDefault();

        let target = event.target;
        //console.log(target);
        if (target.parentNode.classList.contains('sheet-command__title')){
            let sheetCommandContent = target.parentNode;
            sheetCommandContent.parentNode.parentNode.classList.toggle('active');
        }
    })


})