function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}
const calc = createCalcFunction(2)
calc()
const calc1 = createCalcFunction(4)
calc1()





function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(5))
console.log(addTen(7))




function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'))
console.log(comUrl('netflix'))
console.log(ruUrl('yandex'))






function bind(person, fn) {
    return fn(person)
}
function logPerson(person) {
    console.log(`Percon: ${person.name}, ${person.age}, ${person.job}`)
}

const person1 = {name: "Vlad", age: 25, job: 'frontend'}
const person2 = {name: "Alex", age: 20, job: 'backend'}

bind(person1, logPerson)
bind(person2, logPerson)











