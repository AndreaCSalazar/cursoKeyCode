/*
Un nombre: "Pepe"
Una edad: 25
Un precio: $99.90
Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.

Mostrar todos esos valores por consola.

Incrementar la edad en 1 y volver a mostrarla.

Agregar una serie a la lista de series favoritas y volver a mostrarla.
*/

let names = "Pepe";
let age = 25;
let price = "$99.90";
let favoriteSerie = ["Dark", "Mr Robot", "Castlevania"];
let favoriteMovies = [
    {
        nameMovie: "Parasite",
        year: "2019", 
        protagonists: ["Cho Yeo-jeong", "Park So-dam", "Song Kang-ho", "Lee Jung-eun"]
    }, 
    {
        nameMovie: "Mad Max", 
        year:"2015", 
        protagonists:["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
    },
];

console.log(names);
console.log(age);
console.log(price);
console.log(favoriteSerie);
console.log(favoriteMovies);

 age+= 1;
console.log("newAge: ", age);

favoriteSerie.push ("Breaking Bad");
console.log("New favorite serie added: ", favoriteSerie);