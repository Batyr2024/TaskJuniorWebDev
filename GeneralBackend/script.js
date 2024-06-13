/* console.log('1');

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

console.log('3');*/ 
//123456
////////////////////////////////////////////////////////////////////

const log = console.log;

log('1');

setTimeout(log, 100, '7');

log('2');

const promise = new Promise((resolve) => {
  log('3');
  resolve(6);
});

log('4');

promise
  .then(log);

log('5');

