let user  = {
    id: 1,
    nombre: "pepe",
    edad: 23,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}
