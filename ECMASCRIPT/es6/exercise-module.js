import { getData } from "./08-api-module.js";

async function solution() {
    return getData()
    .then(resolve => console.log(resolve));
}

solution()