
1. +++
console.log('1');

setTimeout(function () {
  console.log('6');
}, 0);

const qwe = () => {
  return new Promise((resolve) => {
    console.log('2');
    resolve();
  });
};

qwe()
  .then(() => console.log('4'));

Promise.resolve()
  .then(() => console.log('5'));

console.log('3');

-------------------------------------------------------------------------

2. +++
const log = console.log;

log('1');

setTimeout(log, 100, '7');

log('2');

const Promise = new Promise((resolve) => {
  log('3');
  resolve(6);
});

log('4');

Promise
  .then(log);

log('5');

-------------------------------------------------------------------------

3. +++
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'один');
});
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'два');
});
Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); // один

-------------------------------------------------------------------------

4. +++
const myPromise = () => Promise.resolve('I have resolved!')
function firstFunction() {
 myPromise().then(res => console.log(res))
 console.log(‘first’)
}
async function secondFunction() {
 console.log(await myPromise())
 console.log('second')
}
firstFunction()
secondFunction()

// first
// I have resolved!
// Promice
// second

-------------------------------------------------------------------------

5. +++
const myPromise = Promise.resolve('Woah some cool data');
(async () => {
    try {
        console.log(await myPromise);
    } catch {
        throw new Error(`Oops didn’t work`);
    } finally {
        console.log('Oh finally!');
    }
})();

// Woah some cool data
// Oh finally

-------------------------------------------------------------------------

6. +++
const myPromise = Promise.resolve(Promise.resolve('Promise!'));
function funcOne() {
 myPromise.then(res => res).then(res => console.log(res));
 setTimeout(() => console.log('Timeout!', 0));
 console.log('Last line!'); // 1
}

async function funcTwo() {
 const res = await myPromise;
 console.log(await res);
 setTimeout(() => console.log('Timeout!', 0));
 console.log('Last line!'); 
}

funcOne();
funcTwo();

// Last line!
// Promise!
// Promise!
// Last line!
// Timeout!
// Timeout!

-------------------------------------------------------------------------

7. +++
const log = console.log;
log(1);

setTimeout(log, 100, 7);

log(2);

const p = new Promise((resolve) => {
 log(3);
 resolve(6);
})

log(4);

p.then(log);

log(5);

-------------------------------------------------------------------------

8. +++
console.log(1)

setTimeout(function() {
  console.log(6)
},0);

const qwe = () => {
  return new Promise((resolve) => {
    console.log(2);
    resolve();
 })
}

qwe().then(() => console.log(4));

Promise.resolve().then(() => console.log(5));

console.log(3);

-------------------------------------------------------------------------

9. +++
setTimeout(function() {
 console.log(8) // 8
}, 0);

setTimeout(function() {
 console.log(9) // 9
}, 1000);

new Promise (function (resolve) {
    console.log(1); // 1
    resolve(); // empty
    console.log(2); // 2
}).then(function() {
    console.log(6); // 6
});

console.log(3); // 3

async function test1() {
    console.log(4); // 4
    await test2(); // empty
    console.log(7); // 7
};

async function test2() {
    console.log(5); // 5
};

test1();

-------------------------------------------------------------------------

10. +++
log = console.log;
const f = async (x) => log(x);
log(1);
f(2);
log(3);

-------------------------------------------------------------------------

11. +++
let promise = () => {
    return new Promise((resolve, reject) => {
        resolve(true);
    })
};

console.log('CB init'); 

setTimeout(() => console.log('CB 1'), 0);
promise().then((res) => console.log('CB 2'));
console.log('CB finished');

//CB init
//CB finished
//CB 2
//CB 1
-------------------------------------------------------------------------

12. ---
const registerCustomer = () => {
    process.nextTick(() => {
        console.log('Nexttick loop');
    });
    console.log('Current loop');
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
};
registerCustomer();

-------------------------------------------------------------------------

13. ???
const func = (t1 = 1, t2 = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t1 * 1000);
        setTimeout(reject, t2 * 1000);
    });
};

func(1, 2)
.then(func(2, 1))
.then(() => {func(2, 1)})
.then(() => func(2, 1))
.catch(() => {});

-------------------------------------------------------------------------

14. +++
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve(console.log("1")), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject(console.log("2")), 500));
  const results = [await p1, await p2];
}
foo().catch(() => {});

// 2
// 1

-------------------------------------------------------------------------

15. +++

console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');

// start
// end
// promise1
// timer1
// promise2
// timer2

-------------------------------------------------------------------------

16. +++
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7),0);

// 1
// 6
// 3
// 5
// 2
// 4
// 7

-------------------------------------------------------------------------

17. +++
const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })

setTimeout(() => console.log('in setTimeout1'), 1000);

myPromise(1000).then(res => console.log('in Promise 1'));

setTimeout(() => console.log('in setTimeout2'), 100);

myPromise(2000).then(res => console.log('in Promise 2')); 

setTimeout(() => console.log('in setTimeout3'), 2000);

myPromise(1000).then(res => console.log('in Promise 3'));

setTimeout(() => console.log('in setTimeout4'), 1000);

myPromise(5000).then(res => console.log('in Promise '));

// in setTimeout2
// in setTimeout1
// in Promise 1
// in Promise 3
// in setTimeout4
// in Promise 2
// in setTimeout3
// in Promise

