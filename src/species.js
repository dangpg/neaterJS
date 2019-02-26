import { CONFIG } from './config.js';
import Player from './player.js';
import Genome from './genome.js';

export default class Species {
  constructor(id, representative) {
    this.id = id;
    this.representative = representative;
    this.fitnessSum = 0.0;
    this.organisms = [];
    this.numOffsprings = 0;
    this.numCloning = 0;
    this.numCrossover = 0;
    this.offsprings = [];
    this.champion = {};
    this.numStagnated = 0;
  }

  isStagnated() {
    return this.numStagnated > 14;
  }

  dropOrganisms() {
    this.organisms = [];
    this.offsprings = [];
    this.fitnessSum = 0.0;
    this.numOffsprings = 0;
    this.numCloning = 0;
    this.numCrossover = 0;
  }

  assignToSpecies(player) {
    player.species = this.id;
    this.organisms.push(player);
  }

  adjustFitness() {
    for (let i = 0, len = this.organisms.length; i < len; i++) {
      this.organisms[i].fitness /= this.organisms.length;
    }
  }

  calculateFitnessSum() {
    this.fitnessSum = 0.0;
    for (let i = 0, len = this.organisms.length; i < len; i++) {
      this.fitnessSum += this.organisms[i].fitness;
    }
  }

  getChampion() {
    if (this.champion && Math.abs(this.champion.fitness - this.organisms[0].fitness) < CONFIG.STAGNATION_THRESHOLD) {
      this.numStagnated++;
    } else {
      this.numStagnated = 0;
    }

    this.champion = this.organisms[0];
  }

  isCompatibleWith(player) {
    let numDisjointGenes = 0;
    let numExcessGenes = 0;
    let numMatchingGenes = 0;
    let sumWeightDifferenceMatchingGenes = 0.0;

    let representativeHighestInnovation = this.representative.brain.connections[
      this.representative.brain.connections.length - 1
    ].innovation;
    let playerHighestInnovation = player.brain.connections[player.brain.connections.length - 1].innovation;

    const innovationSet = [
      ...new Set([
        ...this.representative.brain.connections.map(c => c.innovation),
        ...player.brain.connections.map(c => c.innovation)
      ])
    ];

    for (let i = 0, len = innovationSet.length; i < len; i++) {
      if (
        this.representative.brain.connections.some(c => c.innovation === innovationSet[i]) &&
        player.brain.connections.some(c => c.innovation === innovationSet[i])
      ) {
        sumWeightDifferenceMatchingGenes += Math.abs(
          this.representative.brain.connections.find(c => c.innovation === innovationSet[i]).weight -
            player.brain.connections.find(c => c.innovation === innovationSet[i]).weight
        );
        numMatchingGenes++;
      } else if (this.representative.brain.connections.some(c => c.innovation === innovationSet[i])) {
        if (innovationSet[i] < playerHighestInnovation) {
          numDisjointGenes++;
        } else {
          numExcessGenes++;
        }
      } else {
        if (innovationSet[i] < representativeHighestInnovation) {
          numDisjointGenes++;
        } else {
          numExcessGenes++;
        }
      }
    }

    const avgWeightDifferenceMatchingGenes =
      numMatchingGenes > 0 ? sumWeightDifferenceMatchingGenes / numMatchingGenes : 0.0;
    const N = Math.max(
      this.representative.brain.nodes.length + this.representative.brain.connections.length,
      player.brain.nodes.length + player.brain.connections.length
    );

    return (
      (CONFIG.C1 * numExcessGenes) / N +
        (CONFIG.C2 * numDisjointGenes) / N +
        CONFIG.C3 * avgWeightDifferenceMatchingGenes <
      CONFIG.COMPABILITY_THRESHOLD
    );
  }

  sortOrganisms() {
    this.organisms.sort((a, b) => b.fitness - a.fitness);
  }

  cull() {
    // dont half population otherwise we wont have two parents
    if (this.organisms.length < 4) {
      return;
    }

    this.calculateFitnessSum();

    let survivors = [];
    let numUpperHalf = Math.floor(this.organisms.length / 2.0);

    while (survivors.length < numUpperHalf) {
      let threshold = Math.random() * this.fitnessSum;
      let sum = 0.0;

      for (let i = 0; i < this.organisms.length; i++) {
        sum += this.organisms[i].fitness;

        if (sum >= threshold) {
          let survivor = this.organisms.splice(i, 1)[0];

          survivors.push(survivor);
          this.fitnessSum -= survivor.fitness;
          break;
        }
      }
    }

    this.organisms = survivors;
  }

  reproduce() {
    // copy champion unchanged
    let championClone = this.champion.clone();

    championClone.generation += 1;
    this.offsprings.push(championClone);
    if (this.numCloning > 0) {
      this.numCloning--;
    } else {
      this.numCrossover--;
    }

    // clone 25% asexual
    for (let i = 0, len = this.numCloning; i < len; i++) {
      let threshold = Math.random() * this.fitnessSum;
      let sum = 0.0;

      for (let j = 0, len2 = this.organisms.length; j < len2; j++) {
        sum += this.organisms[j].fitness;

        if (sum >= threshold) {
          let offspring = this.mutate(this.organisms[j]);

          offspring.generation++;
          this.offsprings.push(offspring);
          break;
        }
      }
    }

    // crossover 75%
    for (let i = 0, len = this.numCrossover; i < len; i++) {
      let threshold = Math.random() * this.fitnessSum;
      let sum = 0.0;
      let parent1;

      for (let j = 0, len2 = this.organisms.length; j < len2; j++) {
        sum += this.organisms[j].fitness;

        if (sum >= threshold) {
          parent1 = this.organisms[j];
          break;
        }
      }

      threshold = Math.random() * this.fitnessSum;
      sum = 0.0;
      let parent2;

      do {
        for (let j = 0, len2 = this.organisms.length; j < len2; j++) {
          sum += this.organisms[j].fitness;
          if (sum >= threshold) {
            parent2 = this.organisms[j];
            break;
          }
        }
        threshold = Math.random() * this.fitnessSum;
        sum = 0.0;
      } while (parent1 === parent2);

      let offspring = this.mutate(this.crossover(parent1, parent2));

      this.offsprings.push(offspring);
    }
  }

  // Every time we get a new off spring, there is a chance for mutation
  // a) 80% that existing connections get mutated (90% adjusted <-> 10% new value)
  // b) 25% that inherited gene which was disabled beforehand (in all parents) gets enabled again
  // c) 3% new node
  // d) 5% (or 30% when large population) new connection
  mutate(parent) {
    let offspring = parent.clone();

    // mutate connections
    for (let i = 0, len = offspring.brain.connections.length; i < len; i++) {
      if (Math.random() < CONFIG.PERCENTAGE_MUTATION) {
        if (Math.random() < CONFIG.PERCENTAGE_MUTATION_ADJUST_WEIGHT) {
          offspring.brain.connections[i].adjustWeight();
        } else {
          offspring.brain.connections[i].reassignWeight();
        }
      }
    }

    let disabledConenctions = offspring.brain.connections.filter(c => c.enabled === false);

    for (let i = 0, len = disabledConenctions.length; i < len; i++) {
      if (Math.random() < 0.25) {
        offspring.brain.connections[i].enabled = true;
      }
    }

    if (Math.random() < CONFIG.PERCENTAGE_NEW_NODE) {
      offspring.brain.addNode();
    }

    if (Math.random() < CONFIG.PERCENTAGE_NEW_CONNECTION) {
      offspring.brain.addConnection();
    }

    return offspring;
  }

  crossover(parent1, parent2) {
    let brainOffspring = new Genome(parent1.numInputs, parent1.numOutputs, parent1.activation);

    const nodesSet = [...new Set([...parent1.brain.nodes.map(n => n.id), ...parent2.brain.nodes.map(n => n.id)])];

    for (let i = 0, len = nodesSet.length; i < len; i++) {
      if (parent1.brain.nodes.some(n => n.id === nodesSet[i]) && parent2.brain.nodes.some(n => n.id === nodesSet[i])) {
        if (Math.random() < 0.5) {
          brainOffspring.nodes.push(parent1.brain.nodes.find(n => n.id === nodesSet[i]).clone());
        } else {
          brainOffspring.nodes.push(parent2.brain.nodes.find(n => n.id === nodesSet[i]).clone());
        }
      }
    }

    const innovationSet = [
      ...new Set([
        ...parent1.brain.connections.map(c => c.innovation),
        ...parent2.brain.connections.map(c => c.innovation)
      ])
    ];

    for (let i = 0, len = innovationSet.length; i < len; i++) {
      if (
        parent1.brain.connections.some(c => c.innovation === innovationSet[i]) &&
        parent2.brain.connections.some(c => c.innovation === innovationSet[i])
      ) {
        if (Math.random() < 0.5) {
          brainOffspring.connections.push(
            parent1.brain.connections.find(c => c.innovation === innovationSet[i]).clone()
          );
        } else {
          brainOffspring.connections.push(
            parent2.brain.connections.find(c => c.innovation === innovationSet[i]).clone()
          );
        }
      } else {
        // disjoint and excess nodes
        if (parent1.brain.connections.some(c => c.innovation === innovationSet[i])) {
          if (parent1.fitness >= parent2.fitness) {
            brainOffspring.connections.push(
              parent1.brain.connections.find(c => c.innovation === innovationSet[i]).clone()
            );
          }
        } else {
          if (parent2.fitness >= parent1.fitness) {
            brainOffspring.connections.push(
              parent2.brain.connections.find(c => c.innovation === innovationSet[i]).clone()
            );
          }
        }
      }
    }

    // only clone nodes where we have references to
    const neededNodesSet = [
      ...new Set([...brainOffspring.connections.map(c => c.start), ...brainOffspring.connections.map(c => c.end)])
    ];

    for (let i = 0, len = neededNodesSet.length; i < len; i++) {
      if (!brainOffspring.nodes.find(n => n.id === neededNodesSet[i])) {
        if (parent1.brain.nodes.some(n => n.id === neededNodesSet[i])) {
          brainOffspring.nodes.push(parent1.brain.nodes.find(n => n.id === neededNodesSet[i]).clone());
        } else {
          brainOffspring.nodes.push(parent2.brain.nodes.find(n => n.id === neededNodesSet[i]).clone());
        }
      }
    }

    let offspring = new Player(
      parent1.generation + 1,
      parent1.numInputs,
      parent1.numOutputs,
      parent1.activation,
      brainOffspring,
      parent1.species
    );

    return offspring;
  }
}
