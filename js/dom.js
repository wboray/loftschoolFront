
document.addEventListener("DOMContentLoaded", function(event) { 

    var divParent = document.createElement('div');
    //var divTest = document.querySelector('#test');

    divParent.className = 'parent';
    divParent.innerText = 'Этот элемент создан при помощи DOM API';
    document.body.appendChild(divParent);

    var divChild = document.createElement('div');
    divChild.className = 'inner';
    divChild.innerText = 'Этот элемент тоже создан при помощи DOM API';

    divParent.appendChild(divChild);
    
    divChild.style.color = 'red';

    divChild.addEventListener('click', function(){
        console.log('этот текст говорит о том, что я всё сделал правильно');
    });



    var a = document.createElement('a');
    a.innerText = 'ссылка';
    a.setAttribute('href', 'https://loftschool.com');
    divParent.appendChild(a);

    a.addEventListener('click', function(event){
        event.preventDefault();
        console.log('Я кликнул на ссылку ' + this.href);
    });
    a.style.display = 'block';

    var input = document.createElement('input');
    var button = document.createElement('button');
    input.value = 'введите текст';
    button.innerText = 'нажми на меня';
    divParent.appendChild(input);
    divParent.appendChild(button);


    button.addEventListener('click', function(event){
        console.log(input.value);
    });



});

