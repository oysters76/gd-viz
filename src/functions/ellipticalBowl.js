export default {
  name: 'Elliptical Bowl',
  f:    (x, y) => x * x + 10 * (y * y),
  dfdx: (x, y) => 2 * x,
  dfdy: (x, y) => 20 * y,
};
