function Cat(color, name) {
	this.color = color
	this.name = name
}

const cat = new Cat('black', 'КОТ') //new - новый инстанс данного класса, у которого доступны поля
console.log(cat)

//=================================================================

// создадим свой NEW
function myNew (constructor, ...args) {
	const obj = {}
	Object.setPrototypeOf(obj, constructor.prototype)
	return constructor.apply(obj, args) || obj
}

const cat = myNew(Cat, 'black', 'KOT')
console.log(cat)


