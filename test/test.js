let neat = neaterJS.init(100, 2, 1, neaterJS.Activations.binaryStep);

const XOR = [{input: [0, 0], output: 0}, {input: [0, 1], output: 1}, {input: [1, 0], output: 1}, {input: [1, 1], output: 0}]
let challenges = XOR.concat(XOR, XOR, XOR, XOR);

do {
    console.log("-----------------GEN " + neat.generation + "-----------------")
    let players = neat.population;
    maxFitness = 0.0;

    for(let j = 0; j < players.length; j++) {
        challenges.sort((a,b) => 0.5 - Math.random());
        let correntGuesses = 0;
        for (let i = 0, len = challenges.length; i < len; i++) {
            players[j].see(challenges[i].input);
            let output = players[j].think()[0];
            if(challenges[i].output == output) {
                correntGuesses++;
            }
        }

        let fitness = correntGuesses;
        players[j].setFitness(fitness);
        if(fitness > maxFitness) {
            maxFitness = fitness;
            bestplayer = players[j];
        }
    }
    
    neat.repopulate();
}while(maxFitness < challenges.length);

console.log("Best player: " + bestplayer.brain.nodes.length + " nodes - " + (bestplayer.brain.nodes.length - 3) + " hidden nodes - " + bestplayer.brain.connections.length + " connections")
bestplayer.see([0.0, 0.0]);
console.log("INPUT (0,0): " + bestplayer.think()[0]);
bestplayer.see([0.0, 1.0]);
console.log("INPUT (0,1): " + bestplayer.think()[0]);
bestplayer.see([1.0, 0.0]);
console.log("INPUT (1,0): " + bestplayer.think()[0]);
bestplayer.see([1.0, 1.0]);
console.log("INPUT (1,1): " + bestplayer.think()[0]);
console.log("");
