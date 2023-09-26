console.log("Hallo")

//String name = "Florian";
//let variable-Name : Type   = Wert
let name: string = "Florian"


let money: number = 612.54
let bool: boolean = false

console.log(name)
console.log(money)
console.log(bool)

name = "Zeshan"

console.log(name)

const lastName: string = "Weber"

console.log(lastName)

function functionName(value: string): string {
    let result: string = "Hallo" + value;
    return result;
}

console.log(functionName("test"))

let mitarbeiter: { name: string, lastName: string } = {
    name: "Florian",
    lastName: "Weber"
}

console.log(mitarbeiter)

mitarbeiter.name = "Zeshan"

console.log(mitarbeiter.name)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

if (3 > 5) {
    console.log("Wahr")
} else {
    console.log("Falsch")
}


console.log("====================================")


function sum(value1: number, value2: number): number {
    let result: number = value1 + value2

    return result
}

const result = sum(3, 17)

console.log(result)

let myFunction = (value1: string): string => {
    return value1 + " TEST"
}

console.log(myFunction("ABC"))


let array: string[] = ["Test", "Hallo", "ABC"]

console.log(array)

console.log(array[0])

array.push("123")

console.log(array)

const lastElement = array.pop()

console.log(lastElement)
console.log(array)

console.log("===================")

const newArray = array.map((element) => {return element.length})

console.log(array)
console.log(newArray)

const filteredArray = array.filter(element => element.charAt(0) === "T")

console.log(array)
console.log(filteredArray)


const a = null;
const b = undefined;
