class User {
    #name
    #age
    #country
    constructor({name, age, country}) {
        this.#name = name
        this.#age = age
        this.#country = country
    }
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.#name}, and welcome!`
    }
    set #userName(name) {
        this.#name = name
    }
    get #userName() {
        return this.#name
    }
}

const sophia = new User({name: 'Sofia', country: 'Colombia', age: 45})
sophia.userName = 'Juan'
console.log(sophia.greeting());