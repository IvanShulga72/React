const arrayOfNumbers: Array<number> = [1, 2, 3, 5, 8]
const arrayOfSrtings: Array<string> = ['a', 'b', 'c']
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfSrtings)