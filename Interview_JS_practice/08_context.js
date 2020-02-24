// context определяет как функция была вызвана
// указывает на ключевое слово this

const person = {
	surname: 'Старк',
	knows: function(what, name) {
		console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
	}
}
 
const john = { surname: 'Сноу'}

person.knows('всё', 'Бран')
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.bind(john, 'ничего не', 'Джон') //создаёт новую функцию


// ================================

function Person(name, age) {
	this.name = name
	this.age = age

	console.log(this)
}

const elena = new Person('Elena', 25)

// =================================
// Явная передача конекста
function logThis() {
	console.log(this) //this - ключевое слово, указывающее на контекст
}

const obj = {num: 42}
logThis.apply(obj) // явно передаем контекст в функцию(на место this)
logThis.call(obj)
logThis.bind(obj) ()

// ==================================
// Неявная передача конекста - Impliset
const animal = {
	legs: 4,
	logThis: function() {
		console.log(this)
	}
}

animal.logThis() //получим обьект в котором вызван метод

// ====================================
// Стрелочная функция
function Cat(color) {
	this.color = color
	console.log('This', this)
	;( () => console.log('Arrow this', this) ) () //не создаёт свой собственный конекст
}

new Cat('red')