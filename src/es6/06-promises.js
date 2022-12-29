const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Yay!!')
        } else {
            reject('ooops')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))


//example in a real situation 
const data = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
}, {
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
}, {
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}]

const getData = () => {
    return new Promise((resolve, reject) => {
        console.log(data.length);
        if(data.length !== 0) {
            setTimeout(() => {
                resolve(data)
                }, 3000);
        } else {
            reject('Oppps, hubo un error obteniendo los datos')
        }
    })
}


getData()
    .then(response => console.log(response))
    .catch(bug => console.log(bug))
