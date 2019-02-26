export function sigmoid(x) {
  return 1.0 / (1.0 + Math.pow(Math.E, -4.9 * x));
}

export function tanh(x) {
  return Math.tanh(x);
}

export function binaryStep(x, step = 0.5) {
  return x < step ? 0.0 : 1.0;
}
