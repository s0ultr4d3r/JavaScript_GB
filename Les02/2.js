/* Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий). */
let a = 2;
let x = 1 + (a *= 2);
 
/* 
a *= 2 работает как a = a * 2
x = 1 + (a = a * 2)
x = 1 + 4
x = 5
*/