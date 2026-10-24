export function step(fn, pos, learning_rate=0.01) {
    const x = pos.x; 
    const y = pos.y;
    dx = fn.dfdx(x,y); 
    dy = fn.dfdy(x,y); 
    return {
        x:pos.x - (dx*learning_rate), 
        y:pos.y - (dy*learning_rate)
    };
}