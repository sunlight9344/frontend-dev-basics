/**
 * class Rect
 * 
 */

class Rect {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다람쥐`);
    }
}

// Test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();

/**
 * cf. 생성자 함수(prototype 기반)
 * 
 */

const Circle = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function() {
    console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})`)
}

const circ1 = new Circle(10,20,5);
const circ2 = new Circle(10,20,10);

circ1.draw();
circ2.draw();

class Shape {
    constructor(fillColor, lineColor) {
        this.fillColor = fillColor;
        this.lineColor = lineColor;
    }

    draw() {
        console.log('못그려임마ㅋ');
    }

    area() {
        console.log('못구한다고ㅋㅋ');
    }
}

class RectTriangle extends Shape {
    constructor(w, h, fillColor, lineColor) {
        super(fillColor, lineColor);
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`RectTriangle w:${this.w} h:${this.h} fillColor:${this.fillColor} lineColor:${this.lineColor}`);
    }

    area() {
        console.log(`RectTriangle area:${this.w * this.h}`);
    }
}

const shape1 = new RectTriangle(10, 20, 'red', 'blue');
shape1.draw();
shape1.area();