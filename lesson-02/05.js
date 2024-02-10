let passport = {
    name: "Petr",
    surname: "Petrov",
};

function clone(obj) {
    let clonedObj = {}

    for (i in obj) clonedObj[i] = typeof obj[i] == "object" ? clone(obj[i]) : obj[i];

    return clonedObj
}

let passport2_0 = clone(passport);
passport2_0.name = "Ivan";

console.log(passport.name);
console.log(passport2_0.name);