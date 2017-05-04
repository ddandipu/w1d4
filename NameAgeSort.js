var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 15 }
];

function compareName(a,b) {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name){
    return -1;
  } else {
      if (a.age < b.age) {
      return 1;
    }   else if (a.age > b.age){
      return -1
    }   else {
      return 0
    }
  }
}

function compareAge(a,b) {
  if (a.age < b.age) {
    return 1;
  } else if (a.age > b.age){
    return -1
  } else {
    return 0
  }
}
// I put the contents of the compareAge function into
// the else portion of "if" of the first age function to
// preexisting compare age when name is the same

students.sort(compareName);
console.log(students);
