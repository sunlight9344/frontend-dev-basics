var o = {
    name: '둘리',
    age: 10
};

// 확장 Object 타입
o.another = {
    name: '마이콜',
    age: 30,
    print: function() {
        console.log(this.name, this.age);
    }
}

console.log(o);
o.another.print();

var f = function(){
    console.log('hello world');
}
f.another = {
    name: '뿌뿌뿌',
    age: 9,
    print: function() {
        console.log(this.name, this.age);
    }
};
console.log(f)
f.another.print();

var i1 = 10;
var i2 = new Number();

console.log(i1, i2, i1 + i2);

i2.another = {
    name: '뿌뿌뿌',
    age: 9
};

console.log(i2);

i1.another = {};
console.log(i1.another);