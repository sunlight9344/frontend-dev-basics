var i = 10;
var f = function() {
    var i = 20;
    j = 99;
    console.log(i);
    console.log(j);
    i = j - i;
}

f();

console.log(i);
console.log(j);

{
    let x = 1000;
    const PI = 3.141592;

    PI = 4;

    console.log(PI);
}


