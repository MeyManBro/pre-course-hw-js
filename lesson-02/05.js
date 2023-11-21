let passport = {
  name: 'Petr',
  surname: 'Petrov',
};
let passportNew = {};
Object.assign(passportNew, passport);
passportNew.name = 'Ivan';

console.log(passport);
console.log(passportNew);