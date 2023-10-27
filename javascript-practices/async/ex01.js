const myAsyncFn = function(param, callback){
    // 비동기 코드
    // [1] 파일 시스템 접근 (FILE IO)
    // [2] network system (fetch)
    // [3] SQL to DB
    // [4] setTimeOut
    setTimeout(function() {
        if(param === 'data') {
            callback(null, 'ok');
        } else {
            callback(new Error('failed'), null);
        }
    }, 1000);
}
// test: success
myAsyncFn('data', function(error, result) {
    if(error) {
       console.log(error);
       return;
    }
    console.log(result);
});

// test: fail
myAsyncFn('', function(error, result) {
    if(error) {
       console.log(error);
       return;
    }
    console.log(result);
});

console.log('wait...');