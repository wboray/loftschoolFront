document.addEventListener("DOMContentLoaded", function(event) { 
    let thanksWindowButton = document.querySelector('#thanks-window-button');
    let thanksWindow = document.querySelector('#thanks-window');
    let buttons = document.querySelectorAll(".btn[data-goto-form='1']");
    let body = document.querySelector('body');
    let html = document.querySelector('html');
    let classes = ['active', 'hidden'];
    let elements = [thanksWindow, body];

    /*
    thanksWindowButton.addEventListener('click', function(){
        _toggleClass(elements, classes);
    })/**/

    //console.log(buttons);
    buttons.forEach(element => {
        element.addEventListener('click', function(event){
            event.preventDefault();
            let section = document.querySelector('#sheet-form').offsetTop;
            gotoSection(html, section, 600);
        })
    });

    /**/
})