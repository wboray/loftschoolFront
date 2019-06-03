document.addEventListener("DOMContentLoaded", function(event) { 

    function error(message) {
        this.message = message;
        this.name = "Исключение, определенное пользователем";
    }

    function filter(input, than) {
        let result = [];

        console.log(input);
        if (!Array.isArray(input)) throw new error('в input передан не массив');
        if (!input.length) throw new error('в input передан массив нулевой длинны');
        if (typeof(than) != "number") throw new error('в than передано не число');
        
        input.forEach(element => {
            if (typeof(element) != "number") throw new error('один элемент массива input не число');
            if (element < 0) throw new error('один элемент массива input является отрицательным числом');
            if (element > than) {
                result.push(element);
            }    
        });

        return result;
    }


    try{
        var array = [12, 100, 34, 65, 10];
        var result = filter(array, 60);

        console.log(result); // [100, 65];

        result = filter(array, 20);
        console.log(result); // [100, 34, 65];

        /*var array = [];
        result = filter(array, 20);
        console.log(result); // [100, 34, 65];/**/

        /*var array = [12, 100, 'a', 65, 10];
        result = filter(array, 20);
        console.log(result); // [100, 34, 65];/**/

        var array = [12, 100, -2, 65, 10];
        result = filter(array, 20);
        console.log(result); // [100, 34, 65];/**/


    }catch (error){
        console.error(error.name + ': ' + error.message);
    }

})