// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9


const sumMain = (a) => {
    return (b) => {
        return a + b
    }
}

const sum = sumMain(3)
// console.log(sum(2))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3


const counterMain = () => {
    let counter = 1
    return () => {
        return counter++
    }
}

const counter1 = counterMain()
const counter2 = counterMain()

// console.log(counter1())
// console.log(counter1())
//
// console.log(counter2())
// console.log(counter1())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const counterMainRefator = (value) => {
    let counter = value
    return {
        increase: () => {
            return counter += 1
        },
        decrease: () => {
            return counter -= 1
        },
        reset: () => {
            return counter = 0
        },
        set: (setValue) => {
            return counter = setValue
        }
    }
}

const objMethods = counterMainRefator(1)
// console.log(objMethods.set(5))


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


const superSum = (value) => {

    if (value === 0) {
        return 0
    }

    return (value1 = 0, value11 = 0, value111 = 0) => {
        return (value2 = 0, value22 = 0, value222 = 0) => {
            return (value3 = 0, value33 = 0, value333 = 0) => {
                return value1 + value11 + value111 + value2 + value22 + value222 + value3 + value33 + value333
            }
        }
    }
}
// Factor in -----------------------

// console.log(superSum(3)(2)(5)(3))


// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// 1) Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
//     Например:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
//
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.
//     Пример работы вашей функции:
//
//     function sumTo(n) { /*... ваш код ... */ }
//
// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//
//     P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?


const sumTo = (n) => {
    if (n === 0) {
        return n
    } else {
        return n + sumTo(n - 1)
    }
}

// console.log(sumTo(100))

// 2) Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
//
//     Определение факториала можно записать как:
//
//     n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
//
//     1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
//
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

const factorial = (n) => {
    if (n === 1) {
        return n
    } else {
        return n *= factorial(n - 1)
    }
}

// console.log(factorial(5))

// 3) Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
//
//     Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//
//     Пример работы:
//
//     function fib(n) { /* ваш код */ }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.


const fib = (n) => {
    if (n <= 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

// console.log(fib(7))


//4)  Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.
//
//     Сделайте два варианта решения: используя цикл и через рекурсию.
//
//     Как лучше: с рекурсией или без?


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


const printList = (list) => {
    console.log(list.value)

    if (list.next) {
        printList(list.next)
    }
}


// console.log(printList(list) )

// 5) Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
//     Сделайте два решения: с использованием цикла и через рекурсию.
//
//

const printList2 = (list) => {

    if (list.next) {
        printList2(list.next)
    }
    console.log(list.value)
}

// console.log(printList2(list))


const arr = [1, 2, [3], [5]]

const array = (a) => {
    let result = []
    for (let i = 0; i <a.length ; i++) {
        if (typeof a[i] === "object") {
            result.push(+a[i].toString())
        }
        else {
            result.push(a[i])
        }
    }
    return result
}

// Factor in -------------------------
// console.log(array(arr))