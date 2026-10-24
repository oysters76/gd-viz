import { allFunctions } from "./functions";

export let f = allFunctions[0];

export function setFunction(fn) {
    f = fn;
}

export function buildGrid(n=100, min=-6, max=6) {
    const range = Array.from({ length: n}, (_,i)=>min + ((max-min)*i/(n-1))); 
    const z = range.map(y => range.map(x => f.f(x,y))); 
    return {range,z}; 
}

export function getRandomPos(a=12, b=6, c=10) {
    return Math.round((Math.random() * a - b) * c)/c; 
}
