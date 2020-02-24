// Immediate Invoked Function Expression

let result = []
for (var i = 0; i < 5; i++) {
	result.push( function() {
		console.log(i)
	} )
}
result[2] () //5
result[4] () //5

// изза того что используем слово var, и обращаемся к i = 5
//=================================================================

let result = []
for (var i = 0; i < 5; i++) {
	(function() {
		var j = i
		result.push( function() { console.log(j) })
	}) () //создадим копию переменной
}
result[2] () //2
result[4] () //4
// т.к. в своем собственном скоупе скопировали примитивные значения i и работаем со своим значением