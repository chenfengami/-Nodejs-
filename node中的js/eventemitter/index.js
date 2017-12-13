const EventEmitter = require('events');
const a = new EventEmitter();
//虽然事件被执行很多次，但是回调函数只执行一次
a.once('newListener', (event, listener) => {
    if(event === 'event'){
        a.on('event', () => {
            console.log('B'); 
        })
    }
})
a.on('event', function(){
    console.log('A');
});
a.emit('event');