let fs = require('fs');

fs.readFile('deneme.txt', 'utf-8', function (err, data) {
    debugger;
    if (err) 
        throw err;
    console.log(data);
});

// node debug readFileTwo.js

/*
next	Stop at the next statement.

cont	Continue execute and stop at the debugger statement if any.

step	Step in function.

out	    Step out of function.

watch	Add the expression or variable into watch.

watcher	See the value of all expressions and variables added into watch.

Pause   Pause running code.

*/