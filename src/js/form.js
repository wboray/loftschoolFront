document.addEventListener("DOMContentLoaded", function(event) { 
    //let thanksWindow = document.querySelector('#thanks-window');
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const formSubmit = document.querySelector('.form__btn-custom');
    const formReset = document.querySelector('.form__clear');
    //const form = document.querySelector('#formid');
    /*
    const classes = ['active', 'hidden'];
    const elements = [thanksWindow, body];*/

    //overlay init
    const template = document.querySelector('#overlayTemplate').innerHTML;
    if (template != undefined) {
        var overlay = createOverlay(template, body);
    }

    //control
    formSubmit.addEventListener('click', function(event){
        event.preventDefault();

        //overlay.open();
        document.querySelector('#send-btn').click();
    })

    function overlayPrintMessage(content, errorTitle){
        overlay.setContent(content, errorTitle);
        overlay.open();
    }
    /*
    formSubmit.addEventListener('click', function(event){
        event.preventDefault();

        _toggleClass(elements, classes);
    })
*/
/*
    Сервер отправки почты расположен по адресу: https://webdev-api.loftschool.com/sendmail

    Метод отправки - POST
   
    Сервер ждет следующие параметры:
   
   1. name - имя заказавшего
   2. phone - телефон заказавшего
   3. comment - комментарий
   4. to - почта (в формате валидного адреса email)

*/
    //отправка и прием данных https://webdev-api.loftschool.com/sendmail 
    //валидация заполнения формы
    const form = document.querySelector('#formid');
    form.addEventListener('submit', function (e){
        e.preventDefault();
        const form = e.target;
        //console.log(form);
        let request = ajaxForm(form);
        if (request){
            request.addEventListener('load', function(){
                //console.log(request);
                if (request.response == null){
                        overlayPrintMessage('неизвестная ошибка', 'ошибка');
                    
                }else if(request.status > 200){
                    overlayPrintMessage(request.responseText, 'ошибка');
                }else{
                    overlayPrintMessage(request.response.message);
                }
            })
        }
    })

    formReset.addEventListener('click', function (e){
        e.preventDefault();
        form.reset();
    })



    const ajaxForm = function (form){
        const url = 'https://webdev-api.loftschool.com/sendmail';
        const email = 'wboray@yandex.ru';
        const formData = new FormData(form);
        formData.append('to', email);

        try{
            //alert(2);
            valid(formData, form);    
        }catch (error){
            console.error(error.name + ': ' + error.message);
            //alert(1);
            return false;
        }

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', url);
        //xhr.open('GET', url);
        xhr.setRequestHeader('X-Requested-width', 'XMLHttpRequest');
        xhr.send(formData);

        return xhr;
        
    }

    function error(message) { 
        this.message = message;
        this.name = "Исключение, определенное пользователем";
    }

    function valid(formData, form){
        console.log(formData);
        console.log(formData.get('name'));
        if (formData.get('name') == '' || formData.get('name').length > 20){
            form.querySelector('input[name="name"]').setCustomValidity('Имя не должно быть пустым и больше чем 20 символов');
            form.querySelector('input[name="name"]').reportValidity();
            throw new error('Имя не должно быть пустым и больше чем 20 символов');
        }

        if (formData.get('phone') == '' || formData.get('phone').length > 12){
            form.querySelector('input[name="phone"]').setCustomValidity('Телефон не должен быть пустым и больше чем 12 символов');
            form.querySelector('input[name="phone"]').reportValidity();
            throw new error('Телефон не должен быть пустым и больше чем 12 символов');
        }

        if (formData.get('comment') == ''){
            form.querySelector('textarea[name="comment"]').setCustomValidity('Комментарий не должен быть пустым');
            form.querySelector('textarea[name="comment"]').reportValidity();
            throw new error('Комментарий не должен быть пустым');
        }
    }

    $('input, textarea').on('input', function() {
         this.setCustomValidity('')
    })




    /*
    const submitButton = document.querySelector('#load');
    const resultList = document.querySelector('#result');
    const filterInput = document.querySelector('#filter');
    let list = [];

    function renderList(filter) {
        resultList.innerHTML = '';

        for (let i = 0; i < list.length; i++) {
            const item = list[i];

            // item.name.includes(filter) - поисе по подстроке
            // item.name.startsWith(filter) - поиск в начале строки
            // item.name.endsWith(filter) - поиск в конце строки
            // item.name.toLowerCase().includes(filter.toLowerCase()) - регистро-независимая фильтрация
            if (!filter || item.name.toLowerCase().includes(filter.toLowerCase())) {
                const li = document.createElement('li');

                li.textContent = item.name;
                resultList.appendChild(li);
            }
        }
    }

    filterInput.addEventListener('input', function() {
        renderList(filterInput.value);
    });

    loadButton.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', citiesUrl);
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', function() {
            list = xhr.response;
            renderList();
        });
    });
*/



})