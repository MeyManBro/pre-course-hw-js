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

console.log(passportWithAddress);

console.log(passportWithNeWAddress);
