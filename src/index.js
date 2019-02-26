import NEAT from './neat.js';
import * as Activations from './activations.js';
import { CONFIG } from './config.js';

export { Activations, CONFIG };

export function init(populationSize = 100, numInputs, numOutputs) {
  let neat = new NEAT(populationSize, numInputs, numOutputs);

  neat.initialize();
  return neat;
}
