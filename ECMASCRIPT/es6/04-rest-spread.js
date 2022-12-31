// arrays destructuring 

let fruits = ['Apple', 'Banana']
let [a, b] = fruits

console.log(a, b)

// Object destructuring

let user = {username: 'Juesgape', age: 17};
let { username, age } = user

console.log(username, age)

// spread operator 

let person = {name: 'Juan', age: 18};
let country = 'COL'

let data = {id: 1, ...person, country}

console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 1)