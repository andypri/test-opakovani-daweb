'use strict';

const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];

const namesList = names.map((name) => {
  return `<li>${name}</li>`;
});

console.log(namesList);

const osoby = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];

const plnoleti = osoby.filter((osoba) => {
  if (osoba.age >= 18) {
    return true;
  } else {
    return false;
  }
});
console.log(plnoleti);

const plnoletiZkracene = osoby.filter((osoba) => osoba.age >= 18);
console.log(plnoletiZkracene);
