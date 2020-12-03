/* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке). */

"use strict"

//es5

function Prod(name, price) {
    this.name = name;
    this.price = price;
}

Prod.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
};

const product1 = new Prod('name1', 500);
product1.make25PercentDiscount();
console.log(product1);

//es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

const product2 = new Product('name2', 600);
product2.make25PercentDiscount();

console.log(product2);