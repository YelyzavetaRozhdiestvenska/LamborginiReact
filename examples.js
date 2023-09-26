// // Запуск: node exaples.js

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

function videoKeys(video) {
  const key = Object.keys(video);
  return key;
}
console.log(videoKeys(video));

function videoValues(video) {
  const values = Object.values(video);
  return values;
}
console.log(videoValues(video));

function videoEntries(video) {
  const entries = Object.entries(video);
  return entries;
}
console.log(videoEntries(video));

// const keys = Object.keys(video);
// console.log(keys);

// const values = Object.values(video);
// console.log(values);

// const entries = Object.entries(video);
// console.log(entries);

// // Задача 3

// // Функция принимает текст и возвращает количество определнных символов в нем

let txtMessage = "Hallo JavaScriprt!!!!!!";

// общее количество символов в строке:

function countSymbol(txtMessage) {
  return txtMessage.length;
}
console.log(countSymbol(txtMessage));

// Уникальные символы в строке:

function countUniqChars(txtMessage) {
  return new Set(txtMessage.split("")).size;
}
console.log(countUniqChars(txtMessage));

// количество определнных символов:

const arr = Array.from(txtMessage);

let symbolsOccurenceMap = arr.reduce((acc, symbol) => {
  acc[symbol] = acc[symbol] ? acc[symbol] + 1 : 1;
  return acc;
}, {});

resultMap = Object.entries(symbolsOccurenceMap).map(([symbol, count]) => {
  return { symbol, count };
});

console.log(resultMap);

// // Задача 4
// // Залить в репозиторий на гитхабе

// Задача 5

// Функция принимает один аргумент
// Если этот аргумент не является массивом, вернуть ошибку
// Еслии массив, вывести тип каждого элемента в нем

function typeElement(massivElement) {
  if (Array.isArray(massivElement) === false) {
    result = "Введите массив значений";
  } else {
    result = massivElement.forEach((item) => console.log(typeof item));
  }
}

console.log(typeElement(["cat", 35, null]));

// Задача 6

// Функция принимает массив и два числа
// Возвращает слайс массива по этим двум числам
// То есть, если числа 2 и 10, вернуть слайс массив по индеку 2-10
// Если одно из чисел больше длинны массива, вызвать ошибку

function masivSlice(massive, a, b) {
  if (a > massive.length || b > massive.length) {
    throw new Error("Введите другое число");
  } else {
    result = massive.slice(a, b);
  }

  return result;
}

let massive = ["ant", "bison", "camel", "duck", "elephant"];
const a = 2;
const b = 5;

console.log(masivSlice(massive, a, b));

// Задача 7 с *

// Функция считывает содержимое txt файла и возвращает его

// input type="file" onchange="readFile(this)"

function readFile(input) {
  // input.files это псевдомассив выбранных файлов. Здесь у нас только один файл, поэтому мы просто берём files[0]
  let file = input.files[0];

  let reader = new FileReader();

  // для текстовых файлов, когда мы хотим получить строку
  reader.readAsText(file);

  // результат чтения (если оно успешно)
  reader.onload = function () {
    console.log(reader.result);
  };

  //  объект ошибки (при неудаче)
  reader.onerror = function () {
    console.log(reader.error);
  };
}
