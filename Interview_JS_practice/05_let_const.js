// let - переменне которые можно перезаписать, доступна внутри блочного скоупа
let a = 'Variable a'
let b = 'Varuable b'

{
	a = 'New variable A'
	let b = 'Local Variable B'
	console.log('Scope A', a)
	console.log('Scope B', b)
}
console.log('A:', a)
console.log('B:', b)

//=================================================================

// Const
const port = 8000
const array = ['Js', 'is', 'cool']
array.push('!')
array[0] = 'JavaScript'
console.log(array)

const obj = {} //можем  менять только внутреннее состояние обьекта
obj.name = 'artem'
obj.age = 18
console.log(obj)