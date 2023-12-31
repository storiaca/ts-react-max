let userName = "Max"; // string type
//userName = 34;
userName = "Aca";

let userAge = 34; // number type

let isValid = true; // boolean type

/* Union types */
type StringOrNumber = string | number;
let userId: StringOrNumber = "123abc";

userId = 123;

/* Object types */
// let user: object; // not best practice

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let user: User;

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};

/* Array types */
// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string}; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];

/* Function types */

function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
  return result;
}

type AddFn = (a: number, b: number) => number;
function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

/* Interface */

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@mail.com",
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

// login(creds)
login(new AuthCredentials());

/* Merging Types */

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Max",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Max",
};

/* Literal Types and Type Guards */

type Role = "admin" | "user" | "editor";
let role: Role; // 'admin', 'user', 'editor'

role = "admin";
// role = "abc"; // error

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

/* Generic Types */
let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 28 }
// );

const newUser = merge({ name: "Max" }, { age: 28 });
newUser.name;
