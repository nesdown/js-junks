// ...values - массив строковых литералов
// ВАЖНЫЙ ПРИМЕР!!!

function sum(...values) {
  console.log(values);

  let sum = 0;

  //Вызвали итератор для объекта (массива строковых литералов)
  //И с помощью агента value просуммировали каждый элемент
  values.forEach(function(value) {sum += value});

  console.log("Your result is: " + sum);
}

sum(1);
sum(1, 2, 3);
sum(1, 6, 7, 8, 10);
