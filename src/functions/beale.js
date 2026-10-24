export default {
  name: 'Beale',
  f: (x, y) => {
    const c = x * y;
    const v = 1.5 - x + c;
    const u = 2.25 - x + c * c;
    const t = 2.625 - x + c * c * c;
    return v * v + u * u + t * t;
  },
  dfdx: (x, y) => {
    const c = x * y;
    const v = 1.5 - x + c;
    const u = 2.25 - x + c * c;
    const t = 2.625 - x + c * c * c;
    return 2 * v * (-1 + y) + 2 * u * (-1 + 2 * c * y) + 2 * t * (-1 + 3 * c * c * y);
  },
  dfdy: (x, y) => {
    const c = x * y;
    const v = 1.5 - x + c;
    const u = 2.25 - x + c * c;
    const t = 2.625 - x + c * c * c;
    return 2 * v * x + 2 * u * (2 * c * x) + 2 * t * (3 * c * c * x);
  },
};
