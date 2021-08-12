console.log(`primitives`);

// Примитивных типов данных существует: 7

// 1)STRING
// string строчный; строка 
let stringData = 'String Data';
console.log(stringData);

// typeof - оператор определения типа данных

console.log(typeof stringData); // typeof + имя переменной, значение которой нужно определить тип данных 

stringData = '';
console.log(stringData);
console.log(typeof stringData);

stringData = ' ';
console.log(stringData);
console.log(typeof stringData);

// 2)NUMBER
let number = 1;
console.log(number); // хром подсвечивает фиолетовым, указывает на отличие типа данных от строки
console.log(typeof number); // тип данных number

number = 2e53; // самое большое число в программирование
console.log(number);
console.log(typeof number); //number

number = Infinity; 
console.log(number);
console.log(typeof number); //number

number = NaN; //Not a Number
console.log(number);
console.log(typeof number); //number

// 3)BOOLEAN 
// храненит значения true || false
let isOnline = true;
console.log(isOnline); //цвет тоже фиолетовый, но 
console.log(typeof isOnline); // тип данных: boolean

isOnline = false;
console.log(isOnline); 
console.log(typeof isOnline); //при помощи оператора typeof видим тип данных

// 4)UNDEFINED
//  значение которое получает переменная если мы ее объявили, но не присвоилизначение (let, var)
let message;
console.log(message); 
console.log(typeof message); //в этой переменной хранится undefined
// undefined - это примитивный тип данных, которая нам говорит что какая-то сущность есть, но значение не присвоено 

// 5)NULL
// пустой объект или отсутствие объекта
let user = null; //на случай если в переменной с именем user мы ожидаем объект
console.log(user); 
console.log(typeof user);//typeof сообщает что null как текущее значение переменной  user имеет тип данных object
// но мы знаем что object это тип сложных данных (не примитив!).
// null - примитивное значение, примитивный тип данных при выводе данных оператором typeof говорит что он object. Это специально допущенная ошибка js. 
// null - primitive!

// 6)SYMBOL

// 7)BIGINT