// basic stuff

let id: number = 15;
let employer: string = 'E&Y';
let isRegistered: boolean = true;
let x: any = "data";

let arrData: number[] = [16, 90, 54, 32, 15]

let arrData1: any[] = [1, 'data', false]

arrData.push(53)

console.log(id);

// tuple
let employee: [number, string, boolean] = [101, 'Thomas', true];

// tuple array
let student: [number, string][]

student = [
    [1, 'x'],
    [2, 'y'],
    [3,'z']
]

// union
let employeeId: string | number;
employeeId='101'
employeeId = 101;



// enum
enum EmployeeType {
    FullTime,
    Partime
}

enum Exchange {
    DOWJONES =1,
    NASDAQ=2,
    RUSSELL=3,
}

console.log(Exchange.NASDAQ);

// objects

type User = {
    id: number,
    name: string
} 

const user: User = {
    id:1,
    name:'nkdebug'
}

// type assertion
let empId: any = 1;
let employerId = <number>empId

//employeeId = true

function addtwoNum(x: number, y: number): number {
    return x+y;
}

addtwoNum(1,2)

function print(msg: string | number): void {
    console.log(msg);
    
}

print('dewdew')


// interfaces

interface EmployeeInterface {
    readonly id: number;
    name: string;
    age?: number;

    printName(name: string): void
}

const emp1: EmployeeInterface = {
    id:1,
    name:'thomas',

    printName(name: string): void {

    }

}


interface PersonInterface {
    readonly id: number;
    name: string;
    age?: number;

    printName(name: string): void
}


// classes

class Person implements PersonInterface {
    public id: number = 0
    public name: string = '';
    age?: number | undefined;

    constructor(id: number, name: string) {
        console.log(1111);
        
    }
  
    printName(name: string): void {
        throw new Error("Method not implemented.");
    }


}

// inheritance
class Employee extends Person {

    public id: number = 0
    public name: string = '';
    age?: number | undefined;
    constructor(id: number, name: string) {
        super(id, name);
        console.log(1111);
        
    }
}

const person1 = new Person(1, 'nkdebug');
const person2 = new Person(2, 'rkdebug');

console.log(person1.id);
