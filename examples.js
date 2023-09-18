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
  ["cat", "home", "meow"],
  ["dog", "garden", "woof"],
  ["horse", "forest", "iho"],
];

function petInfoObject(animal, loc, say) {
  const pet = { animal, loc, say };
  return pet;
}

function arrayOfObjects(pets) {
  const res = pets.map((pet) => petInfoObject(pet[0], pet[1], pet[2]));
  return res;
}

console.log(arrayOfObjects(pets));

// // Задача 2
// // Функция принимает объект: {movie: "Akiba", year: 1965, director: "Akira Kurosawa"}
// // Выводит:
// // - все ключи объекта
// // - все значения по ключам объекта
// // - ключи и значения вместте
// // Каждый вывод не зависит от предыдущего

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

// // Задача 3

// // Функция принимает текст и возвращает количество определнных символов в нем

function countCharacter(message, char) {}

let message = "Сколько символов?";
console.log(message.length);

// // let message = 'message';
// // function QuantitiMessage (message => message.lenght) {
// //     console.log(message);
// // }

// // const message = " ";
// // console.log(message.length);

// // Запуск: node exaples.js

// // Задача 4
// // Залить в репозиторий на гитхабе

function sum(a, b) {
  return a + b;
}

// Задача 5
// Функция принимает один аргумент
// Если этот аргумент не является массивом, вернуть ошибку
// Еслии массив, вывести тип каждого элемента в нем

// Задача 6
// Функция принимает массив и два числа
// Возвращает слайс массива по этим двум числам
// То есть, если числа 2 и 10, вернуть слайс массив по индеку 2-10
// Если одно из чисел больше длинны массива, вызвать ошибку

// Задача 7 со звездочкой
// Функция считывает содержимое txt файла и возвращает его
