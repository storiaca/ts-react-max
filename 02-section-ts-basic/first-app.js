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
