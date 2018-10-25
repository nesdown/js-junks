// Шаблонизаторы, или шаблонные строки

function greeting(name='Bob', surname='Marley') {
  console.log(
    `
    One day, a singer ${ name }
    Went for a walk.
    Then, ${ surname } found a magic pill
    And here the adventure starts!
    `
  );
}

greeting("Peter", "Griffin");

//Теггирование шаблонных строк.
