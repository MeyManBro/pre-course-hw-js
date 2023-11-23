let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};



let passportWithNeWAddress = { ...passportWithAddress, address: { ...passportWithAddress.address } };

passportWithNeWAddress.address.country = "Bobryisk";

console.log(passportWithAddress.address.country);

console.log(passportWithNeWAddress.address.country);
