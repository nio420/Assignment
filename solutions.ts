// Problem 1
const filterEvenNumbers = (number: number[]) : number[] => {
    return number.filter((i) => i % 2 === 0)
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])



// Problem 2
const text: string = "typescript"

const reverseString = (param: string) : string => {
  return param.split("").reverse().join("")
}
reverseString(text)



// Problem 3
type StringOrNumber = string | number

const checkType = (value: StringOrNumber) : StringOrNumber => {
  if(typeof value === "string") {
    return "String"
  } else {
    return "Number"
  }
}
checkType("Hello")
checkType(42)



// Problem 4
const user = {
   id: 1,
   name: "John Doe", 
   age: 21 
  };

const getProperty = <T, K extends keyof T> (obj: T, key: K ) => {
    return obj[key]
}
getProperty(user, "name")



// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const myBook : Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
}

const toggleReadStatus = (Book : Book) => {
  return {
    ...Book ,
    isRead : true
  }
}
toggleReadStatus(myBook)




// Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade:string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails (){
    return (`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`);
  }
}
const student = new Student("Alice", 20, "A");
student.getDetails()




// Problem 7
const getIntersection  = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
