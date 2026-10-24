# Gradient Descent Visualizer

A 3D interactive tool that shows how gradient descent works. Pick a math function, drop a ball on its surface, and watch it roll downhill step by step.

## What it does

- Renders a 3D surface plot of a chosen function using Plotly
- A red ball sits on the surface — you control where it starts
- Click **Step** to run one step of gradient descent (the ball moves toward the nearest minimum)
- An orange trail shows the path the ball has taken
- Switch between different functions to see how gradient descent behaves on each

## Functions included

| Name | What it looks like | Why it's interesting |
|---|---|---|
| Simple Bowl | Smooth bowl shape | Easy — gradient descent goes straight to the bottom |
| Elliptical Bowl | Stretched bowl | Shows how uneven curvature causes zigzag paths |
| Rosenbrock | Narrow curved valley | Hard to optimize — the valley floor curves slowly |
| Beale | Bumpy with flat regions | Tests how well the optimizer handles flat areas |
| Rastrigin | Egg carton pattern | Many local minima — gradient descent often gets stuck |
| Saddle | Horse saddle shape | Shows how the ball can escape saddle points |

## Getting started

```bash
npm install
npm run build
npm run dev
```

Open `http://localhost:3000` in your browser.

During development, `npm run dev` watches for file changes and rebuilds automatically with live reloading.

## Controls

- **x / y inputs** — set the ball's position manually
- **Move Ball** — jump the ball to the entered coordinates
- **Step** — run one gradient descent step from the current position
- **Random** — place the ball at a random spot
- **Function dropdown** — switch between surfaces

## Project structure

```
src/
  controls.js        — UI wiring (buttons, inputs, dropdown)
  math.js            — grid builder, active function state
  plot.js            — Plotly rendering (surface, ball, trail)
  functions/         — one file per function (f, dfdx, dfdy)
  optimizers/gd.js   — gradient descent step
public/
  index.html         — page shell
  styles.css         — layout styles
```

## How gradient descent works

Each step, the optimizer:

1. Computes the partial derivatives (slope) at the ball's current (x, y)
2. Moves the ball in the opposite direction of the slope (downhill)
3. The **learning rate** controls how big each step is (default: 0.01)

That's it — repeat until the ball settles at a minimum.
