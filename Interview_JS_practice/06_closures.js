// замыкание - функция имеет доступ к переменным из вышестоящего scope
// function sayHelloTo(name) {
// 	const message = 'Hello ' + name

// 	return function() { //в этой функции нет перменной message, но она доступна выше. Функция её в себе замкнула
// 		console.log(message)
// 	}
// }
// const helloToArtem = sayHelloTo('artem')
// console.log(helloToArtem())

// function createFrameworkManager () {
// 	const fw = ['Angular', 'React']

// 	return {
// 		print: function() {
// 			console.log(fw.join(' '))
// 		},
// 		add: function(framework) {
// 			fw.push(framework)
// 		}
// 	}
// }

// const manager = createFrameworkManager()
// // console.log(manager)
// manager.print()
// manager.add('VueJS')
// manager.print()

// setTimeout

// const fib = [1, 2, 3, 5, 8, 13]

// for (var i = 0; i < fib.length; i++) { //необходмо поменять var на let либо использовать замыкание
// 	setTimeout (function () {
// 		console.log(`fib[${i}] = ${fib[i]}`)
// 	}, 1500)
// }

// 1) var на let, потому что let существует только внутри блочного scope - это фигурные скобки
// const fib = [1, 2, 3, 5, 8, 13]

// for (let i = 0; i < fib.length; i++) { //необходмо поменять var на let либо использовать замыкание
// 	setTimeout (function () {
// 		console.log(`fib[${i}] = ${fib[i]}`)
// 	}, 1500)
// }

// 2) замыкание
// const fib = [1, 2, 3, 5, 8, 13]

// for (var i = 0; i < fib.length; i++) { 
// 	(function(j) {
// 		setTimeout (function () {
// 		console.log(`fib[${j}] = ${fib[j]}`)
// 	}, 1500)
// 	}) (i)	
// }






