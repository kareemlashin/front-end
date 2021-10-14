// There are 3 basic types in TypeScript
let isDone: boolean = false;
let lines: number = 42;
let name_user: string = "Anders";
function bigHorribleAlert(): void {
    alert("I'm a little annoying box!");
  }
  
interface Person {
    name: string;
    // Optional properties, marked with a "?"
    age?: number;
    // And of course functions
    move(): void;
  }
  
  // Object that implements the "Person" interface
  // Can be treated as a Person since it has the name and move properties
  let p: Person = { name: "Bobby", move: () => { } };
  class Point {
    // Properties
    x: number;
  
    // Constructor - the public/private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the
    // constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
  
    constructor(x: number, public y: number = 0) {
      this.x = x;
    }
  
    // Functions
    dist(): number { return Math.sqrt(this.x * this.x + this.y * this.y); }
  
    // Static members
    static origin = new Point(0, 0);
  }
  
  // Classes can be explicitly marked as implementing an interface.
  // Any missing properties will then cause an error at compile-time.
  class PointPerson implements Person {
      name: string
      move() {}
  }
  
  let p1 = new Point(10, 20);
  let p2 = new Point(25); 