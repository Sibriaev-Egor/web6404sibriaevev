/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    return n % 1 === 0
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя циклS
 * @param {*} n
 */
function sumTo(n) {
    if (n < 1) return 0
    let s = 0
    let s1 = 1
    let j = 0
    for (let i = 1; n !== 0; i *= 2) {
        if (n%2 === 1) {
            s += s1 + i*j
            j += i
        }
        s1 += s1 + i*i
        n >>= 1
    }
    return s
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    if (n < 1) return 0
    let s = 1
    let i = 1
    while (i*2 <= n) {
        s += s + i ** 2
        i *= 2
    }
    return s + i*(n-i) + recSumTo(n-i)
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    if (n < 0) return 0
    return n ? n * factorial(n-1) : 1
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    if (n < 1) return false
    return !Boolean(n & (n-1))
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    if (n<1) return 0
    return Math.round((((1 + 5**0.5)/2)**n - ((1 - 5**0.5)/2)**n) / 5**0.5)
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let init = initialValue
    let operator = operatorFn
    if (operatorFn === undefined) return (n) => init
    return (n) => init = operator(init, n)
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    let x = start ?? 0
    let h = step ?? 1
    return function generator() {return (x += h) - h}
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (Number.isNaN(firstObject) || Number.isNaN(secondObject)) return Number.isNaN(firstObject) === Number.isNaN(secondObject)
    if (typeof firstObject !== typeof secondObject) return false
    if (typeof firstObject !== typeof [] || firstObject === null || firstObject === undefined || secondObject === null ||
        secondObject === undefined) return firstObject === secondObject
    const objKeys1 = Object.keys(firstObject);
    const objKeys2 = Object.keys(secondObject);
    if (objKeys1.length !== objKeys2.length) return false;
    for (let key in firstObject) {
        if (deepEqual(firstObject[key], secondObject[key]) === false) return false
    }
    return true
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
