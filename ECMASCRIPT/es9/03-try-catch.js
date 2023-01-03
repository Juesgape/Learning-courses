//we're trying to force an error

try {
    hello()
} catch(error) {
    console.log(error);
}

try {
    anotherFn()
} catch {
    console.log('Hubo tremendo error');
}

