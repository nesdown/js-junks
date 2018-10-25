// 2. Оператор разворота
let old_langs = ["Fortran", "Kobol", "Delphi", "Pascal"];
let new_langs = ["JS", "Python", "Julia", "Haskell"];

let popular_langs = [...new_langs, "C++", "Java"];

// console.log(old_langs);
// console.log(new_langs);
// console.log(popular_langs);

for(let i = 0; i < popular_langs.length; i++) {
  console.log(popular_langs[i]);
}

function sum(a=1, b=1, c=1, d=1, e=1) {
  console.log(a * b * c * d * e);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

sum(...arr);
