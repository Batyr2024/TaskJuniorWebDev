10.toFixed(2) 
10.1.toFixed(3) 

{
let a = 20; 
a.toFixed(2) 
}

398.toString() 
3.98.toString() 

{
const b = 20 
b.toString() 
b.toString(16) 
b.toString(2) 
b.toString(10) 
}

222.toUpperCase() 
'222'.toUpperCase() 
'bbb'.toUpperCase().toLowerCase() 
 
new String('aaa').toUpperCase() 
String('22aa').toLowerCase().toUpperCase() 
 
new Boolean(null) === Boolean(null) 
new Number(10) === Number('10') 
 
new String('200') === String(200) 
new String(1) === new String(1) 
new Number('1') === new Number('1') 

 {
let a = 1; 
let b = 1; 
++a === b++ // ? 
 }

 {
let c = 2 
let b = 3 
c = c + ++b 
b = b + b++ 
console.log(c, b) 
 }

for (let i = 0; i < 5; ++i) { 
    console.log(i) 
} 
 
 
null == NaN 
null == undefined 
null == false 
 
{
let a = 'NaN' 
let b = NaN 
Number.isNaN(a) 
Number.isNaN(b) 
isNaN(a) 
iaNaN(b) 
b !== b 
}

5 + 10 + 31 + 'rub' 
 
!'true' === !'false' 
 
{
const obj = { 
    prop1: 10, 
    'second prop': 20, 
} 
console.log('second prop' in obj) 
}

{
var a = 1; 
function name(a) { 
    a = a + 1 
    return a 
} 
console.log(a) 
console.log(name(a)) 
console.log(name()) 
console.log(a) 
}

{
const obj = { 
    a: { 
        b: { 
            c: 20 
        } 
    } 
} 
let a = obj.a 
let b = obj.a.b 
 
a.b = 10 
b.c.e = { 
    f: 20 
} 
console.log(obj, a, b)
}

{
let a = 0
while(++a < 3) { console.log(a) }

let b = 0
while(b++ < 3) { console.log(b) }
}

{
const obj = { a: 10 }
const obj2 = obj
obj2.b = 20
console.log(obj)
}

{
const obj = { a: 10, b: { c: 20} }
const obj2 = Object.assign({}, obj)
obj2.b.d = 30
console.log(obj)
}

{
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
      }
      
      sayHi();
}

{
    +true;
    !'Lydia';
}

{
    let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);
}

{
    const sum = eval('10*10+5');
}

{
    var num = 8;
    var num = 10;

    console.log(num);
}

{
    const obj = { a: 'one', b: 'two', a: 'three' };
    console.log(obj);
}

{
    !!null;
    !!'';
    !!1;
}

{
    [...'Lydia']; //?
}

{
    let person = { name: 'Lydia' };
    const members = [person];
    person = null;

    console.log(members);
}

{
    const person = {
        name: 'Lydia',
        age: 21
      };
      
      for (const item in person) {
        console.log(item);
      }
}

{
    console.log(3 + 4 + '5');
}

{
    const num = parseInt("7*6", 10);
}

{
   let arr = [1, 2, 3].map(num => {
        if (typeof num === 'number') return;
        return num * 2;
      });
    console.log(arr);
}

{
    (() => {
        let x = (y = 10);
      })();
      
      console.log(typeof x);
      console.log(typeof y);
}

{
    const name = 'Lydia';
    age = 21;

    console.log(delete age);
    console.log(delete name);
}

{
    const user = { name: 'Lydia', age: 21 };
    const admin = { admin: true, ...user };

    console.log(admin);
}

{
    const settings = {
        username: 'lydiahallie',
        level: 19,
        health: 90
      };
      
      const data = JSON.stringify(settings, ['level', 'health']);
      console.log(data);
}

{
    [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
}

{
    //Написать рекурсивную функцию сложения элементов массива
}

{
    let a = {x:5}
    let b = a;
    let c = b;
    c.b = 5;
    a.b.c = a.x;

    console.log(a)
    console.log(b)
    console.log(c)
}