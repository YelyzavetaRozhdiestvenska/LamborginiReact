// // Task 1: React
// Вывести мэп на уровень выше -> в Info

// Task 2: While
// Сделать так, чтобы функция принимала ввод от юзера.
// Запрашивать новый ввод, если переданы невалидные значения

// Сделай мне класс с методами:
// считать текст из файла - 1
// подсчитать кол-во символов в нем и записать в экземпляр - 2
// вывести абсолютный путь к файлу - 3

// Создать подкласс - номер 1
// Считывает текстовый файл

// Создать подкласс - номер 2
// Считывает csv файл Перегрузка 1 метода

// Сделать так, чтобы функция принимала ввод от юзера.
// Запрашивать новый ввод, если переданы невалидные значения

var template =
    "<div><span>Name: </span><span>{{Name}}</span></div><div><span>Size: </span><span>{{Size}}</span></div><div><span>Data: </span><span>{{Data}}</span></div>",
  data = document.getElementById("fileData");

document.getElementById("fileElement").addEventListener(
  "change",
  function (e) {
    var file = this.files
        ? this.files[0]
        : {
            name: this.value,
          },
      fileReader = window.FileReader ? new FileReader() : null;

    if (file) {
      if (fileReader) {
        fileReader.addEventListener(
          "loadend",
          function (e) {
            data.innerHTML = template
              .replace("{{Name}}", file.name)
              .replace("{{Size}}", file.size)
              .replace("{{Data}}", e.target.result.substring(0, 10));
          },
          false
        );
        fileReader.readAsText(file);
      } else {
        data.innerHTML = template
          .replace("{{Name}}", file.name)
          .replace("{{Size}}", "Don't know")
          .replace("{{Data}}", "This browser isn't smart enough!");
      }
    }
  },
  false
);

// Сделай мне класс с методами:
// считать текст из файла - 1
// подсчитать кол-во символов в нем и записать в экземпляр - 2
// вывести абсолютный путь к файлу - 3

class ReadFile {
  constructor(readFile, countSymbol, src) {
    this.readFile = readFile;
    this.size = size;
    this.src = src;
  }
  FileReader() {}
}

// Создать подкласс - номер 1
// Считывает текстовый файл

class One extends ReadFile {
  readAsText() {
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
  }
}

// Создать подкласс - номер 2
// Считывает csv файл Перегрузка 1 метода

class Two extends ReadFile {
  readAsCsv() {}
}

// class HomePet {
//   constructor(name, color, bred, sound, meal) {
//     this.name = name;
//     this.color = color;
//     this.bred = bred;
//     this.sound = sound;
//     this.meal = meal;
//   }
//   say() {
//     console.log(`I say: ${this.sound}`);
//   }
//   eat() {
//     console.log(`I eat: ${this.meal}`);
//   }
// }

// class Dog extends HomePet {
//   searchForBone() {
//     console.log("!");
//   }
// }

// class Cat extends HomePet {
//   lickMilk() {
//     console.log("f");
//   }
// }

// const cat = new Cat("Bagir", "different", "Bengal", "meow", "fish");
// const dog2 = new Dog("Charlie", "black", "Sheltie", "woof", "cheese");

// cat.say();
// cat.lickMilk();

// dog2.say();
// dog2.searchForBone();
