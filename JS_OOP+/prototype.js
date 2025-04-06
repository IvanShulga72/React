// const person = {
//     name: "Max",
//     age: 21,
//     one: function () {
//         console.log(1);
//     }
// }


const person = new Object(
    {
        name: "Max",
        age: 21,
        one: function () {
            console.log(1);
        }
    }
)

Object.prototype.sayHello = function () {
    console.log("Hello");
}

const lena = Object.create(person);
lena.name = "Elena"

const str = new String("I am string");


//===============

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i*n
//     });
// }
// console.log(multBy(array, 3));

Array.prototype.multBy = function (n) {
    console.log(this)
    return this.map(function (i) {
        return i*n
    });
}

console.log(array.multBy(2))

















