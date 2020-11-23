/* Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */
"use strict"

let a = 2;
let b = 5;

/**
 * Функция сложения
 * @param {number} x первое число 
 * @param {number} y второе число 
 */
function plusF(x,y) {
    return x + y;
}

/**
 * Функция вычитания
 * @param {number} x первое число 
 * @param {number} y второе число 
 */
function minusF(x,y) {
    return x - y;
}

/**
 * Функция умножения
 * @param {number} x первое число 
 * @param {number} y второе число 
 */
function multiF(x,y) {
    return x * y;
}

/**
 * Функция деления
 * @param {number} x первое число 
 * @param {number} y второе число 
 */
function segmF(x,y) {
    return x / y;
}

/* alert(plusF(a,b));
alert(minusF(a,b));
alert(multiF(a,b));
alert(segmF(a,b)); */