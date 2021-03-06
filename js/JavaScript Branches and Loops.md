<!-- Какой из указанных циклов может не выполниться ни разу из-за того, что условие (expression) ложно (false)? -->

while

<!-- Когда проверяется условие (expression) в цикле while? -->

До выполнения тела цикла

Инструкция while создает цикл, который выполняет блок кода, пока условие проверки оценивается как true.
Оператор while вычисляет expression перед каждой итерацией цикла.
Если expression оценивается как true, оператор while выполняет statement.
Если expression оценивается как false, выполнение цикла прерывается и скрипт продолжает выполнять инструкции после цикла while.

<!-- Когда проверяется условие (expression) в цикле do...while? -->

После выполнения тела цикла

Цикл с постусловием — цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз.

<!-- Какая инструкция осуществляет полный выход из цикла? -->

break

Выйти из цикла можно не только при проверке условия, но и вообще в любой момент. Эту возможность предоставляет инструкция break. Она полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

Директива continue прерывает не весь цикл, а только выполнение текущей итерации. Её используют, если понятно, что на текущей итерации цикла делать больше нечего или вообще ничего делать не нужно и пора переходить на следующую итерацию.

Директива continue прерывает не весь цикл, а только выполнение текущей итерации. Её используют, если понятно, что на текущей итерации цикла делать больше нечего или вообще ничего делать не нужно и пора переходить на следующую итерацию.

<!-- Какой цикл имеет в себе задаваемые параметры начала, окончания и шага итерации?  -->

for

Цикл со счётчиком — цикл, в котором некоторая переменная изменяет своё значение от заданного начального до конечного значения с некоторым шагом и для каждого значения этой переменной тело цикла выполняется один раз.

В большинстве процедурных языков программирования реализуется оператором for, в котором указывается счётчик, требуемое количество итераций и шаг, с которым изменяется счётчик.

<!-- Что должно произойти с условием (condition) в инструкции if, чтобы код в ветке (statements) выполнился? -->

Условие должно быть выполнено и приведено к true

Инструкция if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.

<!-- Что такое итерация? -->

единоразовое выполнение инструкций в теле цикла

Итерация в программировании — организация обработки данных, при которой действия повторяются многократно, не приводя при этом к вызовам самих себя.

<!-- В каком месте строки кода тернарного оператора указывается условие (condition)? -->

В начале, перед тернарным оператором

Тернарный оператор -
Такая конструкция работает следующим образом:
Вычисляется условие
Если условие истинно (true), вычисляется выражение после ?,
в противном случае значение после :
Результат вычисленного выражения возвращается

Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно. Он часто используется в качестве укороченного варианта условного оператора if.

Синтаксис
условие ? выражение1 : выражение2

<!-- Укажите ветвление, подобное else...if по принципу действия. -->

switch

<!-- Какой из указанных циклов может выполнится все-равно хотя бы раз, если условие (expression) ложно (false)? -->

do...while

<!-- В каком месте строки кода тернарного оператора указывается выражение (statements), если условие оказалось правдивым (true)? -->

После тернарного оператора перед двоеточием

<!-- Чем является счетчик в цикле? -->

переменная, хранящая текущий номер итерации

<!-- Что в себе содержит тело цикла? -->

последовательность инструкций

Циклы - простой способ сделать какое-то действие несколько раз.
Операторы предназначенные для организации циклов в JavaScript:
Цикл*for
Цикл_do...while
Цикл_while
Метка*(label)
break
continue
for...in
for...of

<!-- В чем отличие инструкции if...else от инструкции if -->

После оператора else можно выполнить код, если условие (condition) приводится к false.

В if инструкции внутри блока if выполняются, если выражение истинно. Если выражение ложно, выполняется следующий оператор после блока if. В if else блок if выполняется, если выражение истинно, а если выражение ложно, управление передается блоку else.

<!-- Что произойдет, если условие (condition) в инструкции if не будет выполнено? -->

Код в ветке (statements) не выполнится

if...else
Инструкция if выполняет инструкцию, если указанное условие выполняется (истинно). Если условие не выполняется (ложно), то может быть выполнена другая инструкция.

<!-- В качестве альтернативы какого ветвления используют тернарный оператор? -->

if...else

<!-- Укажите, в чем отличие инструкции switch от инструкции else...if? * -->
<!-- Здесь возможно несколько ответов. -->

-указывает условие (condition) единожды, а потом сравнивает с ним все варианты (case).
-имеет оператор принудительного завершения выполнения кода в каждом блоке, если условие выполнено с true.

Инструкция switch
В некоторых случаях сложности чтения логических конструкций можно избежать, используя оператор ветвления switch. Синтаксис этого оператора разбивает условие на общую часть switch и множество отдельных случаев case. Т.е. применимость этого оператора ограничена только задачами с одним общим вопросом и множеством вариантов ответов.

<!-- В каком месте строки кода тернарного оператора указывается выражение (statements), если условие оказалось ложным (false)?  -->

В конце, после двоеточия

<!-- Что делает инструкция else...if в отличии от инструкции if...else? -->

Предусматривает проверку множества различных условий (condition) в блоках else if. Ищет и выполняет код первого попавшегося блока else if с результатом true.

Формат if/else if гарантирует, что при выполнении какого-либо из условий блоки с другими условиями не будут выполнены. При использовании цепочки if это не гарантируется. Например:

int a = 10;
if( a > 1 )
System.out.println( "Переменная 'a' больше 1" );
if( a > 5 )
System.out.println( "Переменная 'a' больше 5" );

Будут выполнены оба блока, и выведется:
Переменная 'a' больше 1
Переменная 'a' больше 5

<!-- Что будет с кодом в блоке else инструкции if...else, если условие (condition) приводится к true -->

Код будет проигнорирован и не выполнится

<!-- Какая инструкция прерывает выполнение текущей итерации, но не осуществляет полный выход из цикла?  -->

continue
