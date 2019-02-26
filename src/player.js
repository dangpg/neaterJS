import Genome from './genome.js';

export default class Player {
  constructor(generation, numInputs, numOutputs, activation, brain = {}, species = 0, fitness = 0.0) {
    this.generation = generation;
    this.numInputs = numInputs;
    this.numOutputs = numOutputs;
    this.activation = activation;
    this.fitness = fitness;
    this.species = species;
    this.brain = brain;
  }

  initialize() {
    this.brain = new Genome(this.numInputs, this.numOutputs, this.activation);
    this.brain.initialize();
  }

  // tell player what he sees
  see(inputValues) {
    this.brain.setInputs(inputValues);
  }

  // get output values after activating the player's network
  think() {
    return this.brain.activateNetwork();
  }

  setFitness(fitness) {
    this.fitness = fitness;
  }

  clone() {
    return new Player(
      this.generation,
      this.numInputs,
      this.numOutputs,
      this.activation,
      this.brain.clone(),
      this.species,
      this.fitness
    );
  }
}
