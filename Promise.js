'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer


// 1,Producer
// When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // dosing some heavy work (network, read files)
    console.log('doing someting...');
    setTimeout(() => {
        resolve('Nari');
        reject(new Error('no network'));
    }, 2000);
});


// 2,Consumer: then, catch, finaly
Promise //
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finaly(value => {
    console.log('finaly');
});
