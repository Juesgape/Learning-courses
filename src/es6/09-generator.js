function* iterate(arr) {
    for(let value of arr) {
        yield value
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Roberto'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);