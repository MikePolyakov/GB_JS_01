// #3.1 •	Напишите цикл,  выводит  треугольник

var x = "#"
for (var i = 0; i < 7; i++) {
    console.log(x);
    x = x + '#';
}

// #3.2 •	* Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

var a = '#';
var b = ' ';
var c = a + b;
var d = b + a;
for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 7; i++) {
        c = c + a + b;
        d = d + b + a;
    }
    console.log(c);
    console.log(d);
    c = a + b;
    d = b + a;
}