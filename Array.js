let a = new Array(1, 2, 3, 4, 5);

a.push(10);
console.log(a);

a.pop();
console.log(a);

let b = a.concat([6, 7]);
console.log(b);

console.log(a.length);

a.unshift(0);
console.log(a);

a.shift();
console.log(a);

let c = a.slice(1, 3);
console.log(c);

a.splice(1, 2);
console.log(a);

a.reverse();
console.log(a);