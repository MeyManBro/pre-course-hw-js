let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

console.log(passportWithAddress.address.country);

let passportWithNeWAddress = { ...passportWithAddress, address: { ...passportWithAddress.address } };

passportWithNeWAddress.address.country = "Bobryisk";

console.log(passportWithNeWAddress.address.country);
