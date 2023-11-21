let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

console.log(passportWithAddress.address.country);

let passportWithNeWAddress = {};
for (let key in passportWithAddress) {
  passportWithNeWAddress[key] = passportWithAddress[key];
}
passportWithNeWAddress.address.country = "Bobryisk";

console.log(passportWithNeWAddress.address.country);
