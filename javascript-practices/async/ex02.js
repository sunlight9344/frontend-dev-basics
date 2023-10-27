const myAsyncFn = function(param){
    return new Promise(function(resolve, reject) {
        //
        // 비동기 코드
        //
        setTimeout(function() {
            if(param === 'data') {
                resolve("ok");
            } else {
                reject(new Error('fail'));
            }
        }, 1000);
    });
}

// usage[1]: 사용방법 : ~then ~catch
myAsyncFn('')
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });

console.log('wait...');