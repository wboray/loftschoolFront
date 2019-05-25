var name = 'Сергей';
console.log (name);

name = 'Sergey';
console.log (name);

name = 5;
if (typeof(name) == 'string'){
    console.log ('is string');
}else if (typeof(name) == 'number'){
    console.log ('is number');
}else{
    console.log ('не определено');
}

for (let i = 1; i<=10; i++){
    console.log(i);
}


function sum(p1, p2, p3){
    let res = p1 + p2 + p3;

    return res;
}

var result = sum(10, 20, 30);
console.log(result);
var result = sum(55, 44, 33);
console.log(result);


//console.clear();
////////////////////////////array and object

var arr = ['привет', 'loftschool'];
arr.push('я изучаю', 'javascript');
console.log(arr.length);

for (i = 0;i < arr.length; i++){
    console.log(arr[i]);
}

arr = [];
for (i = 0;i <= 9; i++){
    arr[i] = Math.floor(Math.random() * 200);
    if (arr[i] > 150) break;
    if (arr[i] > 100) console.log(arr[i]);
}

var object = {
    name: 'Sergey',
    lastName: 'Family',
    age: 33
}
console.log(object.name);
console.log(object.lastName);
console.log(object.age);

object.data = 'test';
console.log(object.data);


function hello(human){
    return 'Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age + ' лет!';
}

console.log(hello(object));


for (i = 0;i <= 9; i++){
    arr[i] = Math.floor(Math.random() * 200);
    if (arr[i] > 150) {
        console.warn('big data detekted))');
        break;
    }    
    if (arr[i] > 100) console.log(arr[i]);
}
