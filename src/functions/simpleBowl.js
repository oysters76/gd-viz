export default {
  name: 'Simple Bowl',
  f:    (x, y) => x * x + y * y,
  dfdx: (x, y) => 2 * x,
  dfdy: (x, y) => 2 * y,
};