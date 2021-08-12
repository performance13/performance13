// основная особенность js слабая типизация или динамическая типизация, то есть спосособность преобразовывать/изменять типы данных хранящихся в переменных
// существуют явные и не явные способы привидения типов данных
// для привидения какого-то значения к строчному примитивному типу данных string существуют два способа:
// 1) с использованием конструктора String
// 2) способ конкатенации (Concatenating)

/* TO STRING */
// ЧИСЛО К СТРОКЕ
let value = 0;

// 1) с использованием конструктора String
let toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
//через интерполяцию( ` ` ) и шаблонную строку ( ${} ) подставляем переменную value
// в консоле видим что конструктор String получив значение из переменной value (0) вывел 0 черного цвета (хром выдает строчное значение черным цветом)
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; //к текущему значению переменной value добавляем (через +) пустую строку ""
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

value = 1;

// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// Infinity (значение бесконечности) К СТРОКЕ
// есть еще два значения, которые относятся к типу данных number : Infinity (бесконечность) и NaN (Not a Number)
value = Infinity; 

// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// NaN (не число)  К СТРОКЕ
value = NaN; 

// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

/* Вывод: существует 4 значения типа данных NUMBER
их можно преобразовать к строке 2 способами, двумя явными способами: через конструктор String() и конкатенацию */


// БУЛЕВОЕ (логическое) true к СТРОКЕ
value = true;
// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

value = false;
// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);


// UNDEFINED к СТРОКЕ
value = undefined;
// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// NULL к СТРОКЕ
value = null;
// 1) с использованием конструктора String
toString = String(value);
console.log(`${value}, это значение через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2) способ конкатенации
toString = value + ""; 
console.log(`${value}, это значение через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

/*Вывод: строка путем вызова конструктора String()("прародитель строчных данных") или путем конкатенации (добавления пустой строки "" оборачивает наше выражение в кавычки и присваевает ему строчное значение - строчный тип данных )*/
// черный цвет в консоли хром