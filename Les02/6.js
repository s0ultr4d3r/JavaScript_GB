/* Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа */
"use strict"

let a = prompt("введите сумму"); //приведение к строке не требуется, так как промт уже возвращает строку
let endNum = a.charAt(a.length-1); // берём последний символ для определения 

switch (a) {
case "11":
case "12":
case "13":
case "14":
case "15":              // исключаем "одиннадцать, двенадцать,.."
case "16":
case "17":
case "18":
case "19":
    alert(`Ваша сумма в ${a} рублей успешно зачислена.`)
    break;   

default:                // если число не из исключений, до далее работа по последней цифре
    switch (endNum) {
    case "1":
        alert(`Ваша сумма в ${a} рубль успешно зачислена.`)
        break;
    case "2":
    case "3":
    case "4":
        alert(`Ваша сумма в ${a} рубля успешно зачислена.`)
        break;        
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
        alert(`Ваша сумма в ${a} рублей успешно зачислена.`)
        break;        
    default:
        break;

    }
}

