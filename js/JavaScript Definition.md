// prompt выводит сообщение и ждёт, пока пользователь введёт текст, а затем возвращает введённое значение или null, если ввод отменён (CANCEL/Esc).

let greetings = 'Welcome';
console.log(greetings);

prompt(greetings);

greetings = prompt('Hello');

// JavaScript имеет динамическую, слабую, неявную типизацию

// JavaScript допускает как парадигмы императивного, так и декларативного программирования. Большая часть кода JS, который мы читаем и пишем, императивная.
// Декларативный код сообщает ПК, что мы хотим достичь, а не как. ПК сам заботится о том, как достичь конечного результата без явного описания этого разработчиком
// Императивное программирование описывает логику работы программы в явных командах с операторами, изменяющими состояние программы.

// alert выводит:
// Модальное окно с сообщением и одной кнопкой "Ok"
alert("What's Up? Everything is fine!");

// Для каких платформ можно писать программы на Js?
//
//JavaScript — язык программирования для браузеров. Он работает под Windows, macOS, Linux и на мобильных платформах, то есть везде.

// Как подключается файл JavaScript в index.html?
// В <body>

// Что выведет confirm?
// Модальное окно с сообщением и двумя кнопками: "Ok", "Cancel"
// confirm выводит сообщение и ждёт, пока пользователь нажмёт «OK» или «CANCEL» и возвращает true/false
let question = confirm('How are you?');

// Как называется вкладка в DevTools, где мы можем проверить исполнение кода JavaScript?
// Console

// Сколько операций в один момент времени может исполнять JavaScript?
// Одну. но можно создавать асинхронные операции.
// Потоки предназначены для исполнения кода за пределами основной программы. Многие языки, например семейство .NET, имеют реализации параллельного программирования. Однако JavaScript — однопоточный язык.
// В JavaScript эиулируют многопоточность
// JavaScript использует асинхронные операции

// С помощью какой программы происходит перевод языка JavaScript в машинный язык?
// Интерпретатор
// Интерпретатор и Компилятор. Есть два способа преобразования кода JavaScript в машиночитаемый язык.
// Интерпретатор читает код построчно и сразу выполняет его. Интерпритатор построчно преобразует исходный код в эквивалентный машинный код.
// Компилятор читает весь код, выполняет оптимизации, а затем производит оптимизированный код. Компилятор сразу преобразует весь исходный код в машинный код.

// Какая особенность у Js в плане управления памятью?
// имеет Garbage Collector, который удаляет не используемый код из памяти автоматически.
// В JavaScript же память выделяется динамически при создании сущностей (т.е., объектов, строк и т.п.) и "автоматически" освобождается, когда они больше не используются. Последний процесс называется сборкой мусора . Слово "автоматически" является источником путаницы и зачастую создаёт у программистов на JavaScript (и других высокоуровневых языках) ложное ощущение, что они могут не заботиться об управлении памятью.

// К какому типу языков программирования относится JavaScript?
// Высокоуровневый

// Можно ли исполнять JavaScript на сервере?
// Да, с помощью Node.js
