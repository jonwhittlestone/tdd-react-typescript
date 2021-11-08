// https://www.youtube.coom/watch?v=nViEqpgwxHE
// https://github.com/benawad/typescript-generic-example/blob/master/src/tmp.ts
// Array
// last
// mkArray function
// addFullName - extend. Constrain what the user can pass to the function
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// last fn
// I want to take a generic array where I don't know
// what the type is, bur inferred what the return type is
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var l2 = last(["a", "b", "c"]);
// or explicitly define return type
var l3 = last(["d", "e", "f"]);
console.log(l);
console.log(l2);
console.log(l3);
var makeArr = function (x, y) {
    return [x, y];
};
var mkRes1 = makeArr(4, 5);
var mkRes2 = makeArr("a", "b");
var mkRes3 = makeArr("a", 5);
console.log(mkRes1);
console.log(mkRes2);
console.log(mkRes3);
/**
 * Can constrain what object accepts with
 * `const makeFullName = (obj: {firstName: string, lastName: string}) => {`
 * @param obj
 * @returns
 */
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
// Use a Generic to say, the object I pass in, should contain
// at least, firstName and lastName
var extend1 = makeFullName({ firstName: 'Jim', lastName: 'Fenton', age: 15 });
console.log(extend1);
function getLength(arg) {
    return arg.length;
}
// let literalLength = 22.length;
// let l = getLength<number>(22);
// console.log(getLength<number>(22));
console.log(getLength("Hello world."));
