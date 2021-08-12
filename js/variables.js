console.log(`veriables`);

// чтобы обрабатывать данные к ним нужен доступ
// для доступа к данным нужны переменные 
// в js  три вида данных: var(ES5), let и const(ES6)

// создаем переменную
//объявление переменной осуществляется через ключевое слово var, let, const
// присваивается имя переменной (это ее идентификатор)
// присваевается значение
// Этапы: 1. объявление переменной 2. ее инициализация 3. использование
console.log(first);  //undefined
//обращаемся до ее объявления, используется переменная у которой на момент ее использования нет значения
// выводит undefined благодаря механизму  Hoisting (поднятие переменных)
var first = 'java';
console.log(first);
// переменную объявленную через ключевое слово var можно использовать до ее объявления, но тогда не будет известно ее истинное значение

// переменные let и const нельзя вызывать (использовать) до ее инициализации (до присвоения ей значения)
let second = 'script';
console.log(second);

// var и let разрешают объявить переменные без значения (инициализации)
let who;
console.log(who); //undefined - значение, когда переменная есть, а ее значение не обнаружено

const third = 'programmer';
console.log(third);
// не имеем права объявить переменную с помощью const без присаоения значения


first = 'word'; //для созданной переменной обращаемся только по имени без ключевого слова
// значени
console.log(first);

first = 'case'
console.log(first); //переменной объявленной через ключевое слово var можно объявить без значения, а потом переназначать его сколько угодно раз


who = 'he';
console.log(who);
who = 'she'; 
console.log(who); //переменной объявленной через ключевое слово var и let можно объявить без значения, а потом переназначать его сколько угодно раз


//third = ''// не имеем права изменять значение переменной (примитивные значения) объявленной с помощью ключевого слова const

//  с оговоркой (примитивные значения)

// потому что типы данных которые хранятся в переменных делятся на два типа: примитивы и сложные типы
