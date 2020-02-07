// function Cat(name, color) {
// 	this.name = name
// 	this.color = color
// }

// Cat.prototype.voice = function() {
// 	console.log(`Cat ${this.name} says meow`)
// }

// const cat = new Cat('Kot', 'white')
// cat.voice()
// console.log(cat)
// console.log(Cat.prototype)

// ================
// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'

// const person = new Person()
// person.name = 'Artem'
// console.log('skin' in person )
// console.log(person.legs)
// console.log(person.name)

// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('skin'))
// =====================
// Object.create() - создает некоторые обьекты используя существующтй прототип

// const proto = {year: 2019}
// const myYear = Object.create(proto) //первый параметр - обьект, который будет являться прототипом для данного обьекта

// console.log(myYear.year)
// // console.log(myYear.hasOwnProperty('year'))
// // console.log(myYear.__proto__ === proto)

// proto.year = 2200

// console.log(myYear.year)