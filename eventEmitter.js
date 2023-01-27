const { futimesSync } = require('fs');

let emitter = require('events').EventEmitter;

function LoopProcessor(num){
    let e = new emitter();

    setTimeout(function (){
        for (let i = 1; i <= num; i++){
            e.emit('beforeProcess', i);
            console.log('processing number' + i);
            e.emit('afterProcess', i);
        }
    }
    , 2000)
    return e;
}
let lp = LoopProcessor(3);
lp.on('beforeProcess', function (data){
    console.log('about to start the process for  ' + data);
});
lp.on('afterProcess', function (data){
    console.log('completed processing ' + data);
});