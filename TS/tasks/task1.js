var flattenConstructor = function () {
    return function (dict) { return Object.values(dict); };
};
var flat1 = flattenConstructor();
var r1 = flat1({ a: 1, b: 2 });
console.log(r1);
var flat2 = flattenConstructor();
var r2 = flat2({ a: '1', b: '2' });
console.log(r2);
