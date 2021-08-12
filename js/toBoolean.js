// TO BOOLEAN
console.log(`boolean`);


// приведение любого строчного значения к BOOLEAN
let value = 'Peace';

// два способа привидения: 
// 1) конструктор Boolean()
// 2) двойное отрицание !!

// 1) вызов конструктора Boolean()
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //true
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// приведение любого строчного числа к BOOLEAN
value = '123';
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //true
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// приведение пустой строки к BOOLEAN
value = '';
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор Boolean(): `, toBoolean); //false
console.log(`тип данных пустой строки ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`пустая строка ${value}, через !!: `, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!: `, typeof toBoolean);

// приведение строки с пробелом к BOOLEAN
value = ' ';
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор Boolean(): `, toBoolean); //true
console.log(`тип данных строки с пробелом ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!: `, toBoolean);
console.log(`тип данных строки с пробелом ${value}, через !!: `, typeof toBoolean);


// число к BOOLEAN

value = 0;
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //false
console.log(`тип данных число ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных число ${value}, через !!: `, typeof toBoolean);

value = 1;
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //true
console.log(`тип данных число ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных число ${value}, через !!: `, typeof toBoolean);


// undefined к BOOLEAN

value = undefined;
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //false
console.log(`тип данных undefined ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных undefined ${value}, через !!: `, typeof toBoolean);


// null к BOOLEAN

value = null;
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //false
console.log(`тип данных null ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных null ${value}, через !!: `, typeof toBoolean);


// NaN к BOOLEAN

value = NaN;
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //false
console.log(`тип данных NaN ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных NaN ${value}, через !!: `, typeof toBoolean);


// Infinity к BOOLEAN

value = Infinity;
// 1)вызов конструктора Boolean()
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean); //true
console.log(`тип данных Infinity ${value}, через конструктор Boolean(): `, typeof toBoolean); //boolean

// 2) через !!
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных Infinity ${value}, через !!: `, typeof toBoolean);

/* Вывод: любое строчное  значение включая пробел (пустую строку) приводится, 1 (любое число в т.ч. минусовое и не целое), infinity приводятся к true к true*/

/* Вывод: пустая строка, 0, undefined, null, NaN, false приводятся к false*/

// Есть понятие шесть фолси значений (шесть ложных значений), которые при преобразовании к булевому значению приводятся к false. Это:
// пустая строка
// числовой 0
// NaN
// undefined
// null
// false

// числовые значения: 0, 1, NaN, Infinity

// другие типы: undefined, null