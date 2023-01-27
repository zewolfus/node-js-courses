let events = require('events');

let em = new events.EventEmitter();

em.on('FirstEvent',function (data){
    console.log('First subscriber: ' + data);
});

em.emit('firstEvent', 'this is my first Node.js event emitter example.');