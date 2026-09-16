let a = [3, 4, 5, 6, 7];
let b = [1, 2, 8, 9, 10];

let c = a.concat(b);
console.log(c);

let d = [...a, ...b];
console.log(d);

let e = [10, ...a, 20, ...b];
console.log(e);