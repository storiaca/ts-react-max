let userName = "Max"; // string type
//userName = 34;
userName = "Aca";

let userAge = 34; // number type

let isValid = true; // boolean type

/* Union types */
let userId: string | number = "123abc";

userId = 123;

/* Object types */
// let user: object; // not best practice
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};
