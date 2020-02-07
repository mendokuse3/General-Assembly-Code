// const host = {
//     name: "Roget",
//     occupation: "creator of Roget's Thesaurus",
//     saySpecs: () => {
//         console.log(`My name is ${host.name}. My occupation is ${host.occupation}.`);
//     }
// };

class BasicHost {
    constructor (name, occupation, personality) {
        this.name = name;
        this.occupation = occupation;
        this.personality = personality;
    }
    saySpecs() {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation}. My personality is ${this.personality}.`)
}
}

var host1 = new BasicHost ("Roget", "creator of Roget's thesaurus");



const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

const personality = [
    'Adventurous', 'Helpful', 'Affable', 'Humble', 'Capable','Imaginative', 'Charming', 'Impartial', 'Confident', 'Independent','Conscientious', 'Keen', 'Cultured', 'Meticulous', 'Dependable','Observant', 'Discreet', 'Optimistic', 'Dutiful', 'Persistent','Encouraging', 'Precise', 'Exuberant', 'Reliable', 'Fair', 'Sociable', 'Fearless', 'Trusting', 'Gregarious', 'Valiant'
];

const hostArray = [];

for (let i = 0; i < 100; i++) {
    hostArray.push(new BasicHost(names[Math.floor(Math.random()*names.length)], occupations[Math.floor(Math.random()*occupations.length)], personality[Math.floor(Math.random()*personality.length)]))
}

hostArray[13].saySpecs();