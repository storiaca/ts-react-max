var userName = "Max"; // string type
//userName = 34;
userName = "Aca";
var userAge = 34; // number type
var isValid = true; // boolean type
var userId = "123abc";
userId = 123;
var user;
user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc", // 123
};
/* Array types */
// let hobbies: Array<string>;
var hobbies; // number[], boolean[]
// {name: string}; age: number}[]
hobbies = ["Sports", "Cooking", "Reading"];
/* Function types */
function add(a, b) {
    var result = a + b;
    console.log(result);
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add);
// interface Credentials {
//   mode: string;
// }
var creds;
creds = {
    password: "abc",
    email: "test@mail.com",
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) { }
// login(creds)
login(new AuthCredentials());
var admin;
admin = {
    permissions: ["login"],
    userName: "Max",
};
/* Literal Types */
var role; // 'admin', 'user', 'editor'
role = "admin";
// role = "abc"; // error
