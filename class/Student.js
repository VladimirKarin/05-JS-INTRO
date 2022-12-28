class Student {
  constructor(vardas, gimimoMetai) {
    this.name = vardas;
    this.birthYear = gimimoMetai;
    this.isMarried = false;
    this.shoes = 40;
    this.marks = [];
  }
  //Metodas itraukiantis nauja pazymi
  addMark(mark) {
    this.marks.push(mark);
  }

  marksAverage() {
    if (this.marks.length === 0) {
      return "neiskaita";
    }

    // const correctMarks = this.marks
    //   .filter((m) => m > 0)
    //   .filter((m) => m <= 10)
    //   .filter((m) => m % 1 === 0);

    const correctMarks = this.marks.filter(
      (m) => m >= 1 && m <= 10 && m % 1 === 0
    );

    console.log(correctMarks);
    return correctMarks.reduce((t, m) => t + m, 0) / this.marks.length;
  }
}
export { Student };

// export default Student;

//Alternativa
// module.exports = Student;

// Alternativa:
// module.exports = class Student {
//   constructor(vardas, gimimoMetai) {
//     this.name = vardas;
//     this.birthYear = gimimoMetai;
//     this.isMarried = false;
//     this.marks = [];
//   }
// };
