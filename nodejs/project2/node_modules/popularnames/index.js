function createName(number) {
  switch (number) {
    case 1:
      return "Prisha"; // return is better than console.log. console.log is used for debugging. I can use the return value in other function but if I use console.log I cannot.
      break;
    case 2:
      return "Aadhya";
      break;
    case 3:
      return "Amyra";
      break;
    case 4:
      return "Inaya";
      break;
    case 5:
      return "Pari";
      break;
    case 6:
      return "Siya";
      break;
    case 7:
      return "Kyra";
      break;
    case 8:
      return "Dhriti";
      break;
    case 9:
      return "Kiara";
      break;
    case 10:
      return "Ayra";
      break;
    default:
      return "Please enter a number between 1 and 10, otherwise you do not get a name";
      break;
  }
}

// const name = createName(2); //This was just to test if the function works at all.
// console.log(name);

module.exports = createName;

// const names = [
//   name1,
//   name2,
//   name3,
//   name4,
//   name5,
//   name6,
//   name7,
//   name8,
//   name9,
//   name10,
// ];

// return number <= names.length ? names[number - 1] : "number exceed the limits";
