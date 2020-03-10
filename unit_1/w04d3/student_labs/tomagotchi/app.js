class Tomagotchi {
    constructor(hunger, sleepiness, boredom, age){
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
    feed() {
        this.hunger ++;
        this.sleepiness ++;
    }
    lightOff() {
        this.sleepiness += 1;
    }
    play() {
        this.sleepiness += 1;
        this.hunger += 2;
    }
    namePet(name) {
        this.name = name;
    }
    agePet(){
        this.age ++;
    }
}
const vulpix = new Tomagotchi()
vulpix.namePet('bob');
// setInterval(vulpix.agePet(), 60000);

// let ime = document.getElementById("image");
// image.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png"
// document.getElementById("image").src = "https://www.serebii.net/pokemon/art/037-a.png"
// ime.setAttribute("src", "https://www.serebii.net/pokemon/art/037-a.png");
console.log(vulpix);

document.getElementById("age").innerHTML = vulpix.age;
document.getElementById("hunger").innerHTML = vulpix.hunger;
document.getElementById("boredom").innerHTML = vulpix.boredom;
document.getElementById("sleepiness").innerHTML = vulpix.sleepiness;





