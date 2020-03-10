const host = {
    name: "bob",
    occupation: "dudebro",
    saySpecs() {
        console.log("My name is " + this.name + ". My occupation is " + this.occupation + ".");
    }
}
host.saySpecs();

class BasicHost {
    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;
        this.saySpecs = function () {
            console.log("My name is " + this.name + ". My occupation is " + this.occupation + ".");
        }
    }
    // addMethod() {
    //     this.saySpecs = function() {
    //         console.log("My name is " + this.name + ". My occupation is " + this.occupation + ".");
    //     }
    // }
}

var host1 = new BasicHost("roger", "man of culture");
let host2 = new BasicHost("sam", "vet tech");
console.log(host1);
console.log(host2);
// host1.addMethod()
// host1.saySpecs()
host1.saySpecs();


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
console.log(names.length);
console.log(occupations.length);


const hostArray = [];

for (let i = 0; i < 100; i++){
    const randomName = names[Math.floor(Math.random()*names.length)];
    const randomOccupation = occupations[Math.floor(Math.random()*occupations.length)];
    hostArray.push(new BasicHost(randomName, randomOccupation))
}
console.log(hostArray);






hostArray[45].saySpecs();
