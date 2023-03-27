console.log('Lesson 5');


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта


let someObj = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    console.log(`My name is ${this.name}. I am ${this.age}`)
}

greeting.call(someObj)

console.log("NEXT")

// / Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

let obj2 = {
    count: 0,
    getCurrentCount() {
        console.log(this.count)
    },
    increment() {
        this.count += 1
    },
    decrement() {
        this.count -= 1
    },
    setCurrentCount(value) {
        this.count = value
    },
    restCurrentCount() {
        this.count = 0
    }
}

obj2.getCurrentCount()
obj2.increment()
obj2.getCurrentCount()
obj2.decrement()
obj2.getCurrentCount()
obj2.setCurrentCount(20)
obj2.getCurrentCount()
obj2.restCurrentCount()
obj2.getCurrentCount()


console.log("NEXT")

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

const counter = {
    count: 0,
    getCurrentCount() {
        console.log(this.count)
    },
    increment() {
        this.count += 1
        return this
    },
    decrement() {
        this.count -= 1
        return this
    },
    setCurrentCount(value) {
        this.count = value
        return this
    },
    restCurrentCount() {
        this.count = 0
        return this
    }
}


counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

console.log("NEXT")

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function myFirstConstructorFunc(name, age) {
//
//
// }
//
// myFirstConstructorFunc()


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};

const a = Two.sayHello.bind(One)

a()


console.log("NEXT")


// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore


const helperObj = {
    name: "Default",
    age: "0",
    changeName (newName) {
        this.name = newName
        console.log(this.name)
    },
    setAge (newAge) {
        this.age = newAge
        console.log(this.age)
    },
    greeting () {
        Two.sayHello.call(helperObj)
    }
}

helperObj.changeName("Maria")
helperObj.setAge(200)
helperObj.greeting()