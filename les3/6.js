/* Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

let array = [];
for (long = 0; long < 20; long++) {
    array.push('x');
    console.log(array.join(''));
}