// ----------------------Задача №1----------------------------------------------
 class PrintEditionItem {
   constructor(name, releaseDate, pagesCount){
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.state = 100;
     this.type = null;
   }
   fix() {
     this.state = this.state * 1.5;
     return this.state;
   }
   set state(state) {
     if (state < 0 ) {
       this._state = 0;
     } else if (state > 100 ) {
       this._state = 100;
     } else {
       this._state = state;
     }
   }
   get state() {
     return this._state;
   }
  }

 const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

 console.log(sherlock.releaseDate); //2019
 console.log(sherlock.state); //100
 sherlock.fix();
 console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";

  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15



// ------------------ Задача №2 ------------------------------------------------



class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if ( book.state > 30) {
      this.books.push(book);
    }
  }


  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++)  {
        if ( this.books[i][type] == value ) {
          return this.books[i];
        }
     }
     return null
  }


  giveBookByName(bookName) {
   for ( let i = 0; i < this.books.length; i++ ) {
      if (  this.books[i].name == bookName  ) {
        let element = this.books[i];
        this.books.splice(i,1);
        return element;
      }
    }
    return null
  }

}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));


console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924)); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3






// ---------------- Задача №3 --------------------------------------------------

class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  getName(name) {
    return this.name;
  }

  addGrade(grade, subject) { 
    if (this.marks[subject]) {
      if (grade >= 1 && grade <= 5) {
        this.marks[subject].push(grade);
      } else {
          console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
    } else {
      this.marks[subject] = [];
      if (grade >= 1 && grade <= 5) {
        this.marks[subject].push(grade);
      } else {
          console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
      } 
    return this.marks[subject].length
  }

  getAverageBySubject(subject) {
    if (this.marks[subject]) {
      let sum = 0;
      for ( let i = 0; i < this.marks[subject].length; i ++) {
          sum += this.marks[subject][i];
          }
      let average = sum / this.marks[subject].length;
      return average;
    } else {
      return 0
    }
  }

  getTotalAverage() {
    function getAverageMark(marks) {
      if (marks.length == 0) {
            return 0;
        }
      let sum = 0;
      for ( let i = 0; i < marks.length; i ++) {
          sum += marks[i];
          }
      return sum / marks.length;
    }
  let averageScore = {};
  if ( (Boolean(Object.keys(this.marks).length === 0)) ) {
      return 0;
    } else {
      for (let prop in this.marks) {
        averageScore[prop] = getAverageMark(this.marks[prop])
        
      }
      let marksArray = [];
      for ( let mark in averageScore) {
        marksArray.push(averageScore[mark]);
          }
          return getAverageMark(marksArray)
    }
  }
}


// Проверки

// const log = new StudentLog('Олег Никифоров');
// console.log(log.getName()) // Олег Никифоров

// console.log(log.addGrade(3, 'algebra'));// 1
// console.log(log.addGrade('отлично!', 'math'));// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0
// console.log(log.addGrade(4, 'algebra'));// 2
// console.log(log.addGrade(5, 'geometry'));// 1
// console.log(log.addGrade(25, 'geometry'));// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// // 1

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getTotalAverage()); // 3,75
