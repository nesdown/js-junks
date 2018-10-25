// пример по typeof
// typeof(<параметр один!>) - позволяет определить тип переменной

let e = 14;
let b = "Hello";
let c = false;
let d = 10.4;
let a = [1, 2, 3, 4];
let f = {
  Ukraine: "Kyiv",
  Russia: "Moscow"
}

// console.log(typeof(a) + " " +
//  typeof(b) + " " +
//  typeof(c) + " " +
//  typeof(d) + " " +
//  typeof(e) + " " +
//  typeof(f));

function find_sum(a, b) {
  if (typeof(a) == 'number' && typeof(b) == 'number')
    console.log(a + b);
  else
    console.log('Try something else!');
}

find_sum(14, true);
