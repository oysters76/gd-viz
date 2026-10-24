import Plotly from 'plotly.js-dist-min'; 
import { f } from './math.js'; 

const trail = { x: [], y: [], z: [] };

export function createPlot(containerId, range, zData,x=0,y=0) {
    const surface = {
        z: zData, x: range, y: range, 
        type: 'surface', colorscale: 'Viridis', opacity: 0.9, showscale:false
    }; 

    const ball = {
        x: [0], y: [0], z: [f.f(x,y)], 
        type: 'scatter3d', mode: 'markers', marker: {size:6, color:'red'}, name:'ball'
    }; 

    const layout = {
        margin: {l:0, r:0, t: 0, b: 0}, 
        scene:{
            xaxis: {title:'X'}, 
            yaxis: {title:'Y'}, 
            zaxis: {title:'Z'}
        }
    }; 

    const trailTraces = {
        x: [], y:[], z:[],
        type: 'scatter3d', mode: 'lines+markers', 
        marker: {size:2, color:'orange'}, 
        line: {color:'orange', width:2}, 
        name: 'trail'
    }; 

    Plotly.newPlot(containerId, [surface,ball, trailTraces], layout); 
}

export function moveBall(containerId, x, y){
    z = f.f(x,y); 
    trail.x.push(x); 
    trail.y.push(y); 
    trail.z.push(z); 
    Plotly.restyle(containerId, {
        x: [trail.x],
        y: [trail.y], 
        z: [trail.z], 
    }, [2]);
    Plotly.restyle(containerId, {x: [[x]], y: [[y]], z: [[f.f(x,y)]]}, [1]); 
}

export function updateSurface(containerId, range, zData) {
    Plotly.restyle(containerId, {z: [zData], x: [range], y: [range]}, [0]); 
    moveBall(containerId, 0, 0); 
}
