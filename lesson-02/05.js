let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

console.log(passport);

let passportNew = {};
Object.assign(passportNew, passport);
passportNew.name = 'Ivan';

console.log(passportNew);