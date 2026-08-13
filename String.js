let str = "  Hello JavaScript World  ";


let clean = str.trim();


console.log(clean.toUpperCase());



console.log(clean.toLowerCase());



console.log(clean.includes("JavaScript"));



console.log(clean.startsWith("Hello"));



console.log(clean.endsWith("World"));



console.log(clean.indexOf("JavaScript"));



console.log(clean.slice(0, 5));



console.log(clean.replace("World", "Developer"));



let words = clean.split(" ");
console.log(words);



console.log(clean.length);


console.log(clean.charAt(1));



let result = "Hello".concat(" ", "Tushar");
console.log(result);
