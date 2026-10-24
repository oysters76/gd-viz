export default {
  name: 'Saddle',
  f:    (x, y) => x * x - y * y,
  dfdx: (x, y) => 2 * x,
  dfdy: (x, y) => -2 * y,
};
