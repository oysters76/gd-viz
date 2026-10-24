export default {
  name: 'Rosenbrock',
  f: (x, y) => {
    const t = (1 - x) * (1 - x);
    const v = y - x * x;
    return t * t + 100 * (v * v);
  },
  dfdx: (x, y) => -2 * (1 - x) + 400 * x * (x * x - y),
  dfdy: (x, y) => 200 * (y - x * x),
};
