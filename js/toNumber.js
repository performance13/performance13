// для привидения какого-то значения к числовому типу данных number существуют два способа:
// 1) с использованием конструктора Number()
// 2) унарный плюс

/* TO NUMBER */
// любое строчное значение к ЧИСЛУ
let value = 'Hello';

// 1) с использованием конструктора Number()
let toNumber = Number(value);
console.log(`${value}, это значение через конструктор Number(): `, toNumber);
// возвращается значение NaN потому что при одбрасывании кавычек '' Hello не является числом
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
// хотя и значение NaN тип данных изменился со строки на число  - number

// 2)унарный плюс
toNumber = +value;
console.log(`${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных ${value}, преобразовано через унарный +: `, typeof toNumber);

// строчное число к ЧИСЛУ
value = '123456789';

// 1) с использованием конструктора Number()
toNumber = Number(value);
console.log(`${value}, это значение через конструктор Number(): `, toNumber);
// возвращается значение number потому что при одбрасывании кавычек '' это число
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
//значение number тип данных изменился с NaN на число  - number

/* строка с любым значением '...' вернет NaN */
/* пустая строка или строка с пробелом вернет 0 */

// 2)унарный плюс
toNumber = +value;
console.log(`${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных ${value}, преобразовано через унарный +: `, typeof toNumber);

// пустая строка к ЧИСЛУ
value = '';

// 1) с использованием конструктора Number()
toNumber = Number(value);
console.log(`пустая строка ${value}, это значение через конструктор Number(): `, toNumber);
// пустая строка возвращается значение 0
console.log(`тип данных пустой строки ${value}, через конструктор Number(): `, typeof toNumber);
//пустая строка приводится к числовому нолю  - number; тип данных number

// 2)через унарный плюс
toNumber = +value;
console.log(`пустая строка ${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных пустой строки ${value}, преобразовано через унарный +: `, typeof toNumber);

// строка с пробелом к ЧИСЛУ
value = ' ';

// 1) с использованием конструктора Number()
toNumber = Number(value);
console.log(`строка с пробелом ${value}, это значение через конструктор Number(): `, toNumber);
// строка с пробелом возвращается значение 0 как и пустая строка при этом тип данных меняется со string на  number
console.log(`тип данных строки с пробелом ${value}, через конструктор Number(): `, typeof toNumber);
//строка с пробелом со string приводится к числовому нолю  - number; тип данных number

// 2)через унарный плюс
toNumber = +value;
console.log(`строка с пробелом ${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных строки с пробелом ${value}, преобразовано через унарный +: `, typeof toNumber);

/* Вывод: расмотрели 4 основных значения строки: строчное значение, строчное число, пустая строка, строка с пробелом*/


// Булевое (логическое) true к ЧИСЛУ
value = true;

// 1) с использованием конструктора Number()
toNumber = Number(value);
console.log(`${value}, это значение через конструктор Number(): `, toNumber);
// true через конструктор Number() преобразуется к 1
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
// при этом тип данных меняется с boolean на number

// 2)унарный плюс
toNumber = +value;
console.log(`${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных ${value}, преобразовано через унарный +: `, typeof toNumber);

// Булевое (логическое) false к ЧИСЛУ
value = false;

// 1) с использованием конструктора Number()
toNumber = Number(value); //переменная toNumber принимает в себя значение false преобразованное через конструктор Number()
console.log(`${value}, это значение через конструктор Number(): `, toNumber); //false через конструктор Number() возвращает значение 0 
// false через конструктор Number() преобразуется к 0
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber); //тип данных с false при этом меняется с boolean на  number
// при этом тип данных меняется с boolean на number

// 2)унарный плюс
toNumber = +value;
console.log(`${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных ${value}, преобразовано через унарный +: `, typeof toNumber);

/*Вывод: к 0 приводится пустая строка , строка с пробелом, false*/

/*Вывод: к 1 приводится 1, строчное число, true*/


// undefined к ЧИСЛУ
value = undefined;

// 1) с использованием конструктора Number()
toNumber = Number(value); 
console.log(`${value}, это значение через конструктор Number(): `, toNumber); // при преобразовании становится NaN (не определен поэтому не число)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber); // number

// 2)унарный плюс
toNumber = +value;
console.log(`${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных ${value}, преобразовано через унарный +: `, typeof toNumber);

/*Вывод: undefined при преобразовании к типу данных number возвращает значение NaN*/

// null к ЧИСЛУ
value = null;

// 1) с использованием конструктора Number()
toNumber = Number(value);
console.log(`${value}, это значение через конструктор Number(): `, toNumber); // null при преобразовании через конструктор Number() преобразуется в числовой 0 (станет number из object (исключение из правил! примитивного типа данных) )
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber); // станет тип данных number из object

// 2)унарный плюс
toNumber = +value;
console.log(`${value}, это значение преобразовано через унарный +: `, toNumber);
console.log(`тип данных ${value}, преобразовано через унарный +: `, typeof toNumber);

/*Вывод: к 0 приводится пустая строка , строка с пробелом, false*/

/* null вернет 0 */

