//constructor funtion acting as tempelate for object

// example1
// function Car(color2, brand, fuelType) {
//   this.color1 = color2;
//   this.brand = brand;
//   this.fuelType = fuelType;
//   this.start = function () {
//     console.log(`car ${this.color1} ${this.brand} started`);
//   };
// }
// const obj = new Car("black", "BMW", "Petrol");
// const obj1 = new Car("Red", "Honda", "Petrol");
// console.log(obj);
// console.log(obj1);

// example2

// function Circle(radius, x, y) {
//   this.radius = radius;
//   this.location = { x: x, y: y };
//   this.draw = function () {
//     console.log(this.location);
//   };
//   this.move = function (nextx, nexty) {
//     this.location.x = nextx;
//     this.location.y = nexty;
//   };
// }

// const obj = new Circle(10, 0, 0);
// console.log(obj);
// for (let i = 1; i <= 10; i++) {
//   obj.move(i, i);
//   obj.draw();
// }

// example3.>>

// function User(fullname) {
//   this.fullname = fullname;
//   this.friendlist = [];
//   this.addfriend = function (friendname) {
//     this.friendlist.push(friendname);
//   };
//   this.printfriendname = function () {
//     console.log(this.friendlist);
//   };
//   this.findmutualswith = function (userobj) {
//     console.log(this);
//     const mutual = this.friendlist.filter((friend) =>
//       userobj.friendlist.includes(friend)
//     );
//     console.log(mutual);
//   };
// }

// const vivek = new User("Vivek kumar");
// vivek.addfriend("Harish");
// vivek.addfriend("Radhe");
// vivek.addfriend("Ajay");

// vivek.printfriendname();

// const Rahul = new User("rahul kumar");
// Rahul.addfriend("Shiva");
// Rahul.addfriend("Radhe");
// Rahul.addfriend("Ajay");

// Rahul.printfriendname();

// vivek.findmutualswith(Rahul);

// Example4.>>

// **************creating object*************************
// const student = {
//   name: "Alok",
//   roll: 7,
//   subject: "CBSE",
//   about: function () {
//     console.log("I love JS");
//   },
//   favcolor: "Green",
//   address: {
//     state: "Bihar",
//     country: "In",
//   },
// };

// console.log(Object.entries(student));
// console.log(Object.values(student));

// *****Simple copy*****
// let tempobj = student;
// tempobj.roll = 10;
// console.log(student);

// *******Asign makes first level of object only intact********************
// const tempobj = Object.assign({}, student);
// console.log(tempobj);
// tempobj.name = "Ashish";
// console.log(student);
// console.log(tempobj);

//here we are creating memory reference but only for first level of object

// *************Activity= create below********

// const employeeData = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// class Util {
//   constructor(data) {
//     this.data = data;
//   }
//   sumSalaries = () => {
//     const arrdata = Object.values(this.data).reduce((a, b) => a + b, 0);
//     return arrdata;
//   };
//   averageSalaries = () => {
//     const totalsal = this.sumSalaries();
//     console.log(totalsal);
//     const count = Object.keys(this.data).length;
//     const avgsal = Math.floor(totalsal / count);
//     return avgsal;
//   };
// }

// const newdata = new Util(employeeData);
// console.log(newdata.sumSalaries());
// console.log(newdata.averageSalaries());

// *********************Inheritance**********

// class creditcard {
//   construtctor(card, limit) {
//     this.cardnumber = card;
//     this.limit = limit;
//   }
//   transactions() {
//     console.log("transaction is supported");
//   }
// }
// class SpecialCreditcard extends creditcard {
//   reward() {
//     console.log("5% cashback available");
//   }
// }

// const basecard = new creditcard(12121212121, 400000);
// basecard.transactions();

// const specialcard = new SpecialCreditcard(22222222, 1000000);
// specialcard.reward(); //since credit card is extended so special one is able to access.

// 2.>>>

// class Employee {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markPresent() {
//     console.log(`${this.name}, is present`);
//   }
//   rewardpoint() {
//     console.log("rewardpoint of 2x");
//   }
// }

// class Developer extends Employee {
//   submitcode() {
//     console.log("code submitted by", this.name, "from", this.department);
//   }
//   rewardpoint() {
//     // super.rewardpoint();
//     // here super is only used for method and not for whole constructor unlike below next example
//     console.log("reward point of 5x");
//   }
// }

// const div = new Employee("Ashish", "IT");
// div.rewardpoint();
// const div1 = new Developer("Ashish", "IT");
// div1.submitcode();
// div1.markPresent();
// div1.rewardpoint(); //here we can see that, it doesnot inherit the original 2x reward rather it checks within itself first and
// //if doesnot find within then only check the other one;

// 3.>>>>Super keyword
// class Employee {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markPresent() {
//     console.log(`${this.name}, is present`);
//   }
//   rewardpoint() {
//     console.log("rewardpoint of 2x");
//   }
//   getRole() {
//     console.log("Employee from office");
//   }
// }

// class Developer extends Employee {
//   constructor(Language, ...rest) {
//     super(...rest);
//     this.Language = Language;
//   }
//   submitcode() {
//     console.log("code submitted by", this.name, "from", this.department);
//   }
//   rewardpoint() {
//     // super.rewardpoint();
//     console.log("reward point of 5x");
//   }
//   getRole() {
//     console.log("works with", this.Language);
//   }
// }

// const div1 = new Developer("Javascript", "Ashish", "IT");
// div1.submitcode();
// div1.markPresent();
// div1.rewardpoint();
// div1.getRole();

// ********************************************************************//How to make deep copy**************************
// const obj = {
//   name: "Ashish",
//   address: {
//     city: "bangalore",
//     state: "karnataka",
//   },
// };

// const newobj = { ...obj, address: { ...obj.address } };
// console.log(newobj);
//This way we have to use spread operator again and again for each nesting which is not good;

//so, we can follow recursive approach for that;

// const obj = {
//   name: "Ashish",
//   address: {
//     city: "bangalore",
//     state: {
//       name: "Karnataka",
//       code: "KA",
//     },
//   },
// };

// function deepclone(obj) {
//   if (obj === null) {
//     return null;
//   }
//   const clone = Object.assign({}, obj);
//   Object.keys(clone).forEach(
//     (key) =>
//       (clone[key] =
//         typeof obj[key] === "object" ? deepclone(obj[key]) : obj[key])
//   );
//   return clone;
// }
// console.log(deepclone(obj));
