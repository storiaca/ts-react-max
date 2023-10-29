var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var role; // 'admin', 'user', 'editor'
role = "admin";
// role = "abc"; // error
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        // ...
    }
}
/* Generic Types */
var roles;
roles = ["admin", "editor"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) { },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 28 }
// );
var newUser = merge({ name: "Max" }, { age: 28 });
newUser.name;
