document.addEventListener("DOMContentLoaded", function(event) { 

    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    const items = document.querySelector("#items");

    var position = 1;

    var maxMove = 5;

    /*
    function isMove(position){
        if (maxMove > setPosition + 1)
    }*/

    right.addEventListener('click', function(event) {
        if (maxMove > position + 1){
            position++;
            items.style.right = parseInt(getComputedStyle(items).right) + 100 + 'px';
        }
    });

    left.addEventListener("click", function() {
        if (position - 1 > 0){
            position--;
            items.style.right = parseInt(getComputedStyle(items).right) - 100 + 'px';
        }
    });



});
