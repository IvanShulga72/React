// const str: string = 'hello'
// console.log(str)

const isFetching: boolean = true
const isLoading: boolean = false
const int: number = 42
const float: number = 42.4
const num: number = 3e3
const str: string = 'hello'

const numberArray: number[] = [1, 2, 3, 5, 8, 13, 21]
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13, 21]
const words: string[] = ['hello', 'world']

//Tuple
const contact: [string, number] = ['Vlad', 123456]

//Any
let variable: any = 42
//...
variable = 'New String'
variable = []

//============
function sayMyName(name:string):void {
console.log(name)
}
sayMyName('Ivan')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

//Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 12345
const id2: ID = '12345'

type SomeType = string | null | undefined