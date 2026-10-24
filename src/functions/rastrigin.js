export default {
  name: 'Rastrigin',
  f:    (x, y) => 20 + x * x + y * y - 10 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)),
  dfdx: (x, y) => 2 * x + 20 * Math.PI * Math.sin(2 * Math.PI * x),
  dfdy: (x, y) => 2 * y + 20 * Math.PI * Math.sin(2 * Math.PI * y),
};
