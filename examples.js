// Задача 1
// Функция принимает 3 переменных:
// - животное -> animal
// - локация -> loc
// - что говорит -> say
// возвращает объект с ключами по имени переменных {animal: loc: say:}
// Работает по массиву [["cat", "home", "meow"], ["dog", "garden", "woof"], ["horse", "forest", "iho"]]
// // Результат:
// [].map(i => { function + вывод результата + вернуть резульат })
// [[], [], []] => [{}, {}, {}]

const pets = [
  {
    animal: "cat",
    loc: "home",
    say: "meow",
  },
  {
    animal: "dog",
    loc: "garden",
    say: "woof",
  },
  {
    animal: "horse",
    loc: "forest",
    say: "iho",
  },
];

for (const pet of pets) {
  console.log(pet);
}

const petAnimals = [];
for (const pet of pets) {
  petAnimals.push(pet.animal);
}
console.log(petAnimals);

// [pets].map(i => {i.animal, i.loc, i.say => console.log() });

// Задача 2
// Функция принимает объект: {movie: "Akiba", year: 1965, director: "Akira Kurosawa"}
// Выводит:
// - все ключи объекта
// - все значения по ключам объекта
// - ключи и значения вместте
// Каждый вывод не зависит от предыдущего

const video = {
  movie: "Akiba",
  year: 1965,
  director: "Akira Kurosawa",
};

const keys = Object.keys(video);
console.log(keys);

const values = Object.values(video);
console.log(values);

const entries = Object.entries(video);
console.log(entries);

// Задача 3

// Функция принимает текст и возвращает количество символов в нем

let message = "Сколько символов?";
console.log(message.length);

// let message = 'message';
// function QuantitiMessage (message => message.lenght) {
//     console.log(message);
// }

// const message = " ";
// console.log(message.length);

// Запуск: node exaples.js

// Задача 4
// Залить в репозиторий на гитхабе
