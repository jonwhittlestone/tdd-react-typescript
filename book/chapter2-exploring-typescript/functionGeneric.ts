// https://www.youtube.coom/watch?v=nViEqpgwxHE
// https://github.com/benawad/typescript-generic-example/blob/master/src/tmp.ts
// Array
// last
// mkArray function
// addFullName - extend. Constrain what the user can pass to the function
// interfaces


// Array
type strArr =  Array<string>

// last fn
// I want to take a generic array where I don't know
// what the type is, bur inferred what the return type is
const last = <T>(arr: T[]) => {
    return arr[arr.length - 1]
}
const l = last([1, 2, 3]);
const l2 = last(["a", "b", "c"]);

// or explicitly define return type
const l3 = last<string>(["d", "e", "f"]);

console.log(l);
console.log(l2);
console.log(l3);

const makeArr = <X, Y = number>(x: X, y: Y):[X,Y] => {
    return [x, y];
}
const mkRes1 = makeArr(4, 5);
const mkRes2 = makeArr("a", "b");
const mkRes3 = makeArr<string | null>("a", 5);
console.log(mkRes1);
console.log(mkRes2);
console.log(mkRes3);

/**
 * Can constrain what object accepts with
 * `const makeFullName = (obj: {firstName: string, lastName: string}) => {`
 * @param obj
 * @returns 
 */
const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }

}
// Use a Generic to say, the object I pass in, should contain
// at least, firstName and lastName
const extend1 = makeFullName({ firstName: 'Jim', lastName: 'Fenton', age: 15 });
console.log(extend1);

// Instead of using `any`, specify a generic
// if you don't know what type `data` will be
interface Tab<T> {
    id: string;
    position: number;
    data: T;
}
type NumberTab = Tab<number>
// the above is equivalent to saying
/*
    type NumberTab = {
        id: string;
        position: number;
        data: number;
    }
*/

type StringTab = Tab<string>

// ---

/*
function getLength<T>(arg: T): number {     // Tells compiler that when it
                                            // sees a T symbol, it can expect
                                            // any possible type
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    }
    return 0;
}
console.log(getLength<number>(22));
console.log(getLength("Hello World"));
*/

// Better:

interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

// Using a generic to enforce a certain type (string)
// let literalLength = 22.length;
// these will fail
// let l = getLength<number>(22);
// console.log(getLength<number>(22));
// console.log(getLength(4));

console.log(getLength("Hello world."));