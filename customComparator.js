var students = [
  { id: 1, name: "bruce",    age: 20 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];




students.sort(function(a, b) {
var nameA = a.name;
var nameB = b.name;

  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }
  if (nameA == nameB) {
    students.sort(function(a, b) {
      var ageA = a.age;
      var ageB = b.age;
      return ageB - ageA;
    });
  }
});

console.log(students);

// sort by name

