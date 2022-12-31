const data = [{
    name:'Juan',
    age: 17,
    EnglishLevel: 'Advanced'
}, {
    name:'Camilo',
    age: 22,
    EnglishLevel: 'Intermediate'
}, {
    name:'Sara',
    age: 18,
    EnglishLevel: 'Beginner'
}]

const getData = () => {
    return new Promise((resolve, reject) => {
        if(data.length === 0) {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        } else {
            reject(new Error('Hubo un error obteniendo los datos'))
        }
    })
}

const results = async () => {
    try {
        const fetchedData = await getData()
        console.log(fetchedData)
    } catch (err) {
        console.log(err)
    }
}

results()