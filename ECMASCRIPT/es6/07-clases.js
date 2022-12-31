
//constructor 

class User {
    constructor({
        name,
        age,
        country
    }) {
        this.name = name
        this.age = age
        this.country = country
    }
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}, and welcome!`
    }
    set userName(name) {
        this.name = name
    }
    get userName() {
        return this.name
    }
}

const sophia = new User({name: 'Sofia', country: 'Colombia', age: 45})

/* sophia.name = 'Hola' */
console.log(sophia.userName)
console.log(sophia.userName = 'Juan')