// Array 확장(prototype 기반의 확장)

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if(value instanceof Array){
        // for(var i = 0; i < value.length; i++) {
        //     this.splice(index+i, 0, value[i]);
        // }

        // 이건 오류 뜸
        // why 콜백 함수 안의 this 는 어휘상의 this와 일치하지 않는다.
        // console.log('<<<<<'+this);
        // value.forEach(function(e) {
        //     console.log('----->' + this);
        //     console.log(e);
        // })
        
        // 해결방법1 : closure 사용하는 방법
        // var _this = this;
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e);
        // });

        // 해결방법2 : this를 바꿔치기, 함수가 생성되기 전에 this를 소매넣기 해버리기
        // Function.prototype.bind() 함수를 사용한다.
        // 콜백 함수 블록 안의 this를 세팅할 수 있다.
        // console.log(this);
        var f = function(e) {
            this.splice(index++, 0, e);
        }.bind(this);

        value.forEach(k);

    } else {
        this.splice(index, 0, value);
    }
}

// List 함수 사용하기스
var a = [1, 2, 4];
console.log(a);

a.remove(0);
console.log(a);

a.insert(0,9);
console.log(a);

a.insert(2,['a', 'b', 'c']);
console.log(a);