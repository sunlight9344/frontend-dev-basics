/**
 * 구조 분해
 * 
 * structure decomposition
 */

// ex01 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com',
};

const {firstName, lastName, email} = user;

console.log(firstName, lastName, email);
// ex02 - default value
const goods = {
    name: 'TV',
    price: 112,
    countStock: 10
};

const {name, price, countStock, countSold=0} = goods;
console.log(name, price, countSold, countStock);

// ex03 - 구조 분해 대상이 되는 객체의 속성 이름과 변수 이름이 다를 경우
const person = {
    n: '마이콜',
    c: 'United States of America'
}

const {n: fullName, c:country} = person;

console.log(fullName, country);

// ex04 - 내부객체(nested object)의 구조 분해 structure decomposition
const student = {
    name: '리두',
    age: 99,
    score: {
        math: 100,
        science: 99,
        korean: 1,
        history: 4
    }
};

const {
    name: studentName,
    score: {math, korean, science, music=0}
} = student;

console.log(`${studentName}의 점수
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}
`);


// ex05 - 함수 파라미터
const averageScore = ({score: {math, korean, science, music=0}}) => {
    return (korean + math + science + music) / 4;
};
console.log(averageScore(student));

// ex06 - 배열의 구조 분해
const color = [155, 200, 75];
let [red, green, blue] = color;

console.log(red, green, blue);

// ex07 - 배열의 구조 분해: default value
[red, green, blue, alpha=0] = color;
console.log(red, green, blue, alpha);

// ex10 - 배열의 구조 분해 ...(array spread operator)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violdet'];
const [firstColor, secondColor, ...otherColor] = colors;
console.log(firstColor, secondColor, otherColor);

// ex10 - 배열의 구조 분해 언제 까지 함요;
const f = (...colors) => {
    console.log(colors);
};

