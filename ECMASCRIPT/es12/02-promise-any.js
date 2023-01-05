const promise1 = new Promise((resolve, reject) => reject('Reject'))
const promimse2 = new Promise((resolve, reject) => resolve('Resolve'))

const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'))

Promise.any([promise1, promimse2, promise3])
    .then(response => console.log(response));