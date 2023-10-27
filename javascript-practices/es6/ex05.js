/**
 * Arrow Function
 */

const power = function(x) {
    return x*x;
}

const numbers = [1, 2, 3, 4, 5];

console.log("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${power(n)}\t`);
});

// ex01
console.log("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
numbers.forEach(function(n) {
    // const result = (function(x) {
    //     return x*x;
    // })(n);

    const result = (x => x*x)(n);

    process.stdout.write(`${n}: ${result}\t`);
});

console.log("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// ex02
numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${(x => x*x)(n)}\t`);
});

console.log("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// ex03
numbers.forEach(n => process.stdout.write(`${n}: ${(x => x*x)(n)}\t`));

console.log("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// ex04
[5, 3, 15, 1045, 43, 92].forEach(n => {
    if(n % 5 == 0){
        process.stdout.write(`${n}: ${(x => x*x)(n)}\t`)
    }
});

// ex05 binding 또로또롱
console.log("\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

const dooly = {
    name: '둘리',
    friends: ['도치', '마이콜', '도우너'],
    printFriends: function() {
        this.friends.forEach((friend) => console.log(`${this.name}의 친구 ${friend}`))
    }
};

dooly.printFriends();