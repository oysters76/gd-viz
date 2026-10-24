import { buildGrid, getRandomPos, setFunction } from "./math";
import {createPlot, moveBall, updateSurface} from './plot'; 
import { allFunctions}  from './functions'; 
import {step} from './optimizers/gd'; 

const {range,z} = buildGrid(); 
const x = parseFloat(document.getElementById('ix').value); 
const y = parseFloat(document.getElementById('iy').value); 
createPlot('plot', range, z, x, y); 

document.getElementById('moveBtn').addEventListener('click', ()=>{
    const x = parseFloat(document.getElementById('ix').value); 
    const y = parseFloat(document.getElementById('iy').value); 
    moveBall('plot',x,y); 
}); 

document.getElementById('stepBtn').addEventListener('click', ()=>{
    const x = parseFloat(document.getElementById('ix').value); 
    const y = parseFloat(document.getElementById('iy').value); 
    const idx = parseInt(selectFunctionsCmb.value); 
    const pos = {x,y}; 
    const newPos = step(allFunctions[idx],pos); 
    moveBall('plot',newPos.x,newPos.y); 
    document.getElementById('ix').value = newPos.x; 
    document.getElementById('iy').value = newPos.y; 
}); 

document.getElementById('randBtn').addEventListener('click', ()=>{
    const x = getRandomPos();
    const y = getRandomPos(); 
    document.getElementById('ix').value = x; 
    document.getElementById('iy').value = y; 
    moveBall('plot', x, y); 
})

let selectFunctionsCmb = document.getElementById("fnSelect");
allFunctions.forEach((f,i)=>{
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = f.name; 
    selectFunctionsCmb.appendChild(opt); 
}); 

selectFunctionsCmb.addEventListener('change', ()=>{
    const idx = parseInt(selectFunctionsCmb.value); 
    setFunction(allFunctions[idx]); 
    const grid = buildGrid(); 
    updateSurface('plot', grid.range, grid.z); 
});
