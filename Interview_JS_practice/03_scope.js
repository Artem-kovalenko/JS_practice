// Scope указывает на доступность переменных - область видимости

// function funcA() {
// 	let a = 1

// 	function funcB() {
// 		let b = 2

// 		function funcC() {
// 			let c = 3

// 			console.log('funcC:',a, b, c) // funcC видит по scope переменные а и b и может их выводить
// 		}

// 		funcC()
// 		console.log('funcB:',a, b) //т.к. функция funcB нахоится в scope функции funcA, переменная a также доступна
// 	}

// 	funcB()
// 	console.log('funcA:', a)
// }
// funcA()


/*
	funcC: 1 2 3
	funcB: 1 2
	funcA: 1
*/


