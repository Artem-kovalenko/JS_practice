// hoisting - JS при интерпретации перемещает определение например функций в начало файла
// мы можем обратиться к ним до того, как определили

// console.log(sum(1,41))
// function sum(a, b) {
// 	return a + b
// }

// var i 
// console.log(i)
// i = 42
// console.log(i)

// ===== Разница между var, let, const =====
// let и const - не подвержены hoisting

// console.log(num) // error 
// const num = 42
// console.log(num)

// console.log(num) // undefined
// var num = 42
// console.log(num)


// =====================================
// Function Expression & Function Declaration

// console.log(square(25))
// function square(num) { // Declaration - вызывать можем где угодно
// 	return num ** 2
// }


// const square = function(num) { // Expression - вызывать можем только после инициализации
// 	return num ** 2
// }
// console.log(square(25))




