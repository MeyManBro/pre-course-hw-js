let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};



let passportWithNeWAddress = { ...passportWithAddress, address: { ...passportWithAddress.address } };

passportWithNeWAddress.address.city = "Bobryisk";

let a = passportWithAddress.address.city;
let b = passportWithNeWAddress.address.city

console.log(a);

console.log(b);
