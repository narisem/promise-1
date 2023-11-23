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

// 3, Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});


fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));



// 4,Egg Handing

const getHen = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
});
const getEgg = hen => 
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 계란`), 1000);
});
const cook = egg => 
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 계란후라이`), 1000);
});
