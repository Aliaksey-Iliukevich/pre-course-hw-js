let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

function clone(obj) {
    let clonedObj = {}

    for (i in obj) clonedObj[i] = typeof obj[i] == "object" ? clone(obj[i]) : obj[i];

    return clonedObj
}

let passportWithAddress2_0 = clone(passportWithAddress);

passportWithAddress2_0.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(passportWithAddress2_0.address.city);