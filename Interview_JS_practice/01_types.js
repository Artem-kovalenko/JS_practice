// Типы данных
// null, undefined, boolean, number, string, object, symbol

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof 'JavaScript');
// console.log(typeof 0);
// console.log(typeof {});
// console.log(typeof Math);
// console.log(typeof function() {}); 
// на самом деле функция - обьект, для удобства возвращает функцию

// Отличие undefined от null
// undefined - и спользуется, когда переменная не обьявлена
//             либо обьявлена, но нет никакого значения
// null - отсутствует значение переменной 

// ================================================================

// Приведение типов

// let language = 'JavaScript';
// if (language) {
// 	console.log('The best language is:', language)
// }

// значения которые приводят к false 
// '', 0, null, uneefined, NaN, false
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean('0'));
// console.log(Boolean('Hello'));
// console.log(Boolean('  '));
// console.log(Boolean([]));
// console.log(Boolean({}));
// значения при приведении к Boolean

// =================================================================

// // Cтроки и числа
// console.log(typeof(1 + '2')) // конкатенация
// console.log(typeof('' + 1 + 0))
// console.log(typeof('' - 1 + 0)) // число
// console.log(typeof('3' * '8')) // число
// console.log(4 + 10 + 'px') // сложение, потом конкатенация
// console.log('px' + 5 + 10) // конкатенация (вначале строка)
// console.log('42' - 40) // вычитание (для строк нет оператора '-')
// console.log('42px' - 2) // NaN
// console.log(null + 2) // null = 0
// console.log(undefined + 42) //NaN - unefined невозможно привести к числу

//-----------------------------------------------------------------

// == vs ===

// ==  Сравнивает значения с приведением типов
// === Сравнивает просто по значению без приведения типов

// console.log(2 == '2')
// console.log(2 === '2')
// console.log(undefined == null)
// console.log(undefined === null)
// console.log('0' == false) // true (интерпретирует false в 0)

// =================================================================

// console.log(false == '')
// console.log(false == [])
// console.log(false == {})
// console.log('' == 0)
// console.log('' == [])
// console.log('' == {})
// console.log(0 == [])
// console.log(0 == {})
// console.log(0 == null)










