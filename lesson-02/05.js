let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

console.log(passport.name);

let passportNew = {};
Object.assign(passportNew, passport);
passportNew.name = 'Ivan';

console.log(passportNew.name);