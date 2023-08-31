// Object types -->> we have to initialize both variable
let num: { x: number; y: number } = { x: 1, y: 4 };
console.log(num);

// Optional properties -->> with optional we can initialize the variable if we want so
let num1: { x: number; y?: number } = { x: 1 };

// Interface -->>
interface Point {
  x: number;
  y: number;
}
let p1: Point = { x: 100, y: 200 };

// type alias -->>
type MyPoint = {
  x: number;
  y: number;
};
let p2: MyPoint = { x: 100, y: 200 };

// Difference between type alias and interface -->> Interface can be redeclare but not type alias

// redeclare Point interface
interface Point {
  z: number;
} // this is possible

//not possible redeclare MyPoint type alias
// type MyPoint={
//     z:number
// }                              //Duplicate identifier 'MyPoint'

const typeInDetail = () => {
  // Union types -->>
  let id: number | string = "a1"; // or 1
  let x: string[] | string = ["abc", "csd"]; //or 'abc

  // Mapped types -->>
  type OnlyBoolsAndHorses = {
    [key: string]: boolean | "Horse";
  };

  const confirms: OnlyBoolsAndHorses = {
    del: false,
    rodney: true,
    x: "Horse",
    //3:"e"         //Type '"e"' is not assignable to type 'boolean | "Horse"'
  };
};

const classCheck = () => {
  // case 1) -->> initialization
  class Point1 {
    x: number = 0;
    y: number = 0;
  }

  const classPt = new Point1();
  classPt.x = 1;
  classPt.y = 2;

  //case 2) -->> do not declare type, typescript will declare it according to value
  class Point2 {
    x = 0;
    y = 0;
  }

  const classPt1 = new Point2();
  classPt.x = 1;
  classPt.y = 2;

  // case 3) -->> contructor
  class Poiint3 {
    x: number;
    constructor(n: number) {
      this.x = n;
    }
  }
  const classPt2 = new Poiint3(4);

  // case 4) -->> Getter / Setter
  class Student {
    private_tagName: String = "";
    private_standard: Number = 0;

    get tagName(): String {
      return this.private_tagName;
    }

    set tagName(value: String) {
      this.tagName = value;
    }

    get standard(): Number {
      return this.private_standard;
    }

    set standard(value: Number) {
      this.private_standard = value;
    }
  }

  let faizan = new Student();
};

// merging interface -->>

interface Studetn1 {
  name: String;
  age: Number;
}

const aman: Studetn1 = { name: "aman", age: 21, level: "btech" };

interface Studetn1 {
  level: String;
}

const ajay: Studetn1 = { name: "Ajay", age: 21, level: "btech" };
