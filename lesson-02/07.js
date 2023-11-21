let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk"
  }
};

let passportMarried2 = { ...добавь сюда  married: true, address: { ... } }
passportMarried2.married = ...

console.log(passportMarried);
console.log(passportMarried2);
