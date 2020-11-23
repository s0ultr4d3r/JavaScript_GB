/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение. */

"use strict"
let a = 2;
let b = 5;

/**
 * Функция возвращает результат в зависимости от третьего аргумента operation. plus - сложение, minus - вычитание, multi - умножение, seg - деление
 * @param {number} x первое число
 * @param {number} y второе число
 * @param {string} operation  " + " plus, " - " minus, " * " multi, " / "  seg 
 */
function mathOperation(x, y, operation) {
    switch (operation) {
        case "plus":
            return x + y;
            break;
        case "minus":
            return x - y;
            break;
        case "multi":
            return x * y;
            break;
        case "seg":
            return x / y;
            break;
        default:
            break;
    }
}

/* alert(mathOperation(a,b,"plus"));
alert(mathOperation(a,b,"minus"));
alert(mathOperation(a,b,"multi"));
alert(mathOperation(a,b,"seg")); */