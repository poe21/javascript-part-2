/* Create a constructor function called Warrior that can create new warriors. 
This function will take parameters name, and gender. name can be any string, gender can be M or F. 
It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100 

In addition to that, every object that gets created should have the following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, 
this method should output to the console which player won the fight based on their power. 
Be as creative as you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together.
*/

/* function getRandomPower(powerMin, powerMax) {
    return Math.random() * (powerMax - powerMin) + powerMin;
} */

function getRandomGender() {
    var value = Math.random();
    if (value < 0.5) {
        return "M";
    }
    else {
        return "F";
    }
}

function Warrior(name) {
    this.name = name;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = (Math.random() * (101 - 1)) + 1;
    this.gender = getRandomGender(); // for fun :)))
}

Warrior.prototype = {
    fight: function() {
        return (this.name + " rushes to the arena with their " + this.weapon);
    },
    faceoff: function(opponent) {
        if (this.power > opponent.power) {
            return ("Yay!!! " + this.name + " won the fight and killed " + opponent.name+ "!");
        } else {
            return ("Oops, " + opponent.name + " kinda killed " + this.name + "..... :(");
        }
    }
};

var warrior1 = new Warrior("Bob");
var warrior2 = new Warrior("Bobette");

console.log(warrior1);
console.log(warrior2);
console.log(warrior1.faceoff(warrior2));