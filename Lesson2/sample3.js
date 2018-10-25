// 1. Дефолтные значения

function find_multiply(a, b, c, d=10, e=50) {
  // if (typeof(a) == 'number' &&
  //     typeof(b) == 'number' &&
  //     typeof(c) == 'number' &&
  //     typeof(d) == 'number' &&
  //     typeof(e) == 'number')
    console.log(a * b * c * d * e);

  // else
  //   console.log('Try something else!');
}

find_multiply(2, 2, 3, 4, 5); //120 240
find_multiply(4, 3, 11, 40); // Not a Number
find_multiply(1, 20, 3, 4, 5, 6, 7);

function greeting(greet='Hello', name='Username') {
  console.log(greet + " " + name);
}

greeting('Good evening', 'Bohdan');
