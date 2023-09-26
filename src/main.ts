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

let mitarbeiter: { name: string, lastName: string | undefined } = {
    name: "Florian",
    lastName: undefined
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

const newArray = array.map((element) => {
    return element.length
})

console.log(array)
console.log(newArray)

const filteredArray = array.filter(element => element.charAt(0) === "T")

console.log(array)
console.log(filteredArray)


const a = null;
const b = undefined;


console.log("============================")

let zahlen: number[] = [1, 7, 11, 3]

let doppelt = zahlen.map((element) => element * 2)

console.log(zahlen)
console.log(doppelt)

const wörter: string[] = ["Hallo!", "Test", "Ich", "Du", "Currywurst"]

const longWords = wörter.filter((element) => element.length > 5)

console.log(longWords)

const resultReduce = zahlen.reduce((previousValue, currentValue) => previousValue + currentValue)

console.log(resultReduce)

const anyBiggerThan10 = zahlen.some((element) => element > 10)

console.log(anyBiggerThan10)


type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

function printStudent1(student: Student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")")
    console.log("==============================")

    const newGrades = student.grades.map(grade => {
        if (grade === undefined) {
            return "*"
        }
        else {
            return grade
        }
    })

    console.log("Noten: " + newGrades)
}

function printStudents(students: Student[]) {
    for (let i = 0; i < students.length; i++) {
        printStudent1(students[i])
    }
}

const s1: Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    grades: [1, 5, 6, "A", "F", undefined, "D"]
}

const students: Student[] = [s1, s1, s1]

//printStudent(s1)
//printStudent1(s1)
printStudents(students)
