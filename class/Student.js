class Student {
  constructor(vardas, gimimoMetai) {
    this.name = vardas;
    this.birthYear = gimimoMetai;
    this.isMarried = false;
    this.shoes = 40;
    this.marks = [];
  }
}

export default Student;

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
