const names = ['vlad', 'lena', 'ivan', 'olga'];

/*
names.push('max')
names.unshift('tima') //add on 0 index
const firstName = names.shift() //delete on 0 index
const lastName = names.pop() //delete on last index
console.log(names, firstName, lastName)
const deleteNames = names.splice(1, 2, 'a', 'v') //delete elements start on index
const deleteNames2 = names.toSpliced(1, 2, 'a', 'v') //delete elements start on index, new array
console.log(deleteNames)
console.log(deleteNames)
names.reverse() // replace firstly array
const newReversArray = names.toReversed() // new array
console.log(names)
names.sort() // sort array, replace firstly
const newSortedArray = names.toSorted() // sort array, new
console.log(names)

const greateWoman = 'olga'

const indexGreateWoman = names.indexOf(greateWoman)
console.log(indexGreateWoman)
console.log(names[indexGreateWoman])

const newNames = names.with(indexGreateWoman, 'olga viktorovna')
console.log(newNames)

const newUpNames = names.map((name, index) => {
    return name.toUpperCase()
})
console.log(newUpNames)

console.log(names.includes('igor'))
*/

const people = [{name: 'a', budget: 1223}, {name: 's', budget: 12211}, {name: 'f', budget: 23}, {name: 'r', budget: 1}]

const findPerson = people.find((person) => {return person.budget === 1})
const findIndexPerson = people.findIndex((person) => {return person.budget === 1})


const filtered = people.filter((person) => {return person.budget > 100})
console.log(filtered)

let sumBudget = 0
filtered.forEach((p) => {sumBudget += p.budget})
console.log(sumBudget)


console.log(
    people
        .filter((person) => {return person.budget > 100})
        .map(p => p.budget)
        .reduce((acc, p) => acc + p, 0)
)


const string = 'Hello, how are you?'
const revesred = string.split('').toReversed().join('')
console.log(revesred)
console.log(string)