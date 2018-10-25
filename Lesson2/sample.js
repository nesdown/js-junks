'use strict';

// 1. Статичные функции
// 2. Динамичные функции
// 3. Стрелочные функции

// 1. Возвращают значения (returnable)
// 2. Невозвратные функции (void)

// Статичная, невозвратная (void), не принимает параметры
function hello_greeting() {
  console.log("Hello World");
}

// Статичная, void, принимает параметр
function hello_person(name) {
  console.log("Hello " + name);
}

// Статичная, void, принимает два параметра
function greeting_person(greeting, name) {
  console.log(greeting + ", " + name);
}

// <ключевое слово> <имя_функции/имяФункции> (<параметр1, параметр2, ...>) {
//   Тело функции - то, что она делает
//   <return> результат
// }

find_sum("Hello", [1, 2, 4, 5]);
