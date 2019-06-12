document.addEventListener("DOMContentLoaded", function(event) { 



    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [54.181465, 45.187582],
                zoom: 16,
                height: '100%',
                scroll: false
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">11$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: "Cho cco ...",
                balloonContentHeader: "Cho cco ...",
                balloonContentBody: "Самые вкусные шоколадные батончики - быстро, вкусно, сытно, ждем по адресу:",
                balloonContentFooter: "Саранск ..."
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/map-icon.png',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([54.181349, 45.181572], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'Меточка на соборе ушакова',
                balloonContentBody: "Самые вкусные шоколадные батончики - быстро, вкусно, сытно, ждем по адресу:",
                balloonContentFooter: "Саранск ..."
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: './img/map-icon.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });

    //myMap.container.fitToViewport();

})




                    