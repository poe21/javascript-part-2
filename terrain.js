/* Create a file called terrain.js, then, do the following. 
Commit and push as often as you like so that we can monitor the progress of your code in the pull request.

Create a constructor function called Tile that can create new tiles. 
This function will take parameters x and y and create an object that has these properties:
x: the value that was passed to the constructor
y: the value that was passed to the constructor
height: a random number between 1 and 3
type: a random word between grass, rocks or water
condition: a random word between burning, normal or frozen 
*/

function typeRandomiser() {
    var value = Math.random();
    if (value < 0.33) {
        return "burning";
    } else if (value > 0.33 && value < 0.67) {
        return "normal";
    }
    else {
        return "frozen";
    }
}

function conditionRandomiser() {
    var value = Math.random();
    if (value < 0.33) {
        return "rocks";
    } else if (value > 0.33 && value < 0.67) {
        return "water";
    }
    else {
        return "grass";
    }
}

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.height = Math.floor(Math.random() * 3 + 1);
    this.type = typeRandomiser();
    this.condition = conditionRandomiser();
}

/* In addition to that, every object that gets created should have the following methods:
freeze: if the object is burning, then its condition should change to normal. if the object is normal then 
its condition should change to frozen and if it is frozen, its height should increment by 1
burn: if the object is frozen, then it will become normal. if the object is normal, then it should change to burning. 
if it is already burning, then its height should decrement by 1 until it gets to 0.
*/

Tile.prototype = {
    freeze: function() {
        if (this.condition === "burning") {
            return this.condition = "normal";
        } else if (this.condition === "normal") {
            return this.condition = "frozen";
        } else if (this.condition === "frozen") {
            return this.height + 1;
        }
    },
    burn: function() {
        if (this.condition === "frozen") {
            return this.condition = "normal";
        } else if (this.condition === "normal") {
            return this.condition = "burning";
        } else if (this.condition === "burning") {
            return this.height - 1;
        }
    }
};

/* Write a piece of code that will use the Tile constructor to create a 20x20 map of Tiles. The map will be a 2D 
array (array inside array).
Output the map to the console in the following way:
For each tile, output the height of the tile as an "icon" for that tile
*/

/* function mapMaker() {
    var mapX = [];
    var mapY = [];
    for (var i = 0; i < 21; i++) {
        mapX.push(new Tile(1,1).height);
        for (var i = 0; i < 21; i++) {
           mapY.push(new Tile(1,1).height); 
        }
    }
    return mapX;
}

function mapMaker2() {
    var mapX = [];
    var mapY = [];
    for (var i = 0; i < 21; i++) {
        mapX.push(new Tile(1,1).height);
    }
    return mapX;
}
*/

function mapMaker() {
    var map = [];
    for (var i = 0; i < 21; i++) {
        var row = []
        for (var j = 0; j < 21; j++) {
            row.push(new Tile(i,j).height);
        }
        map.push(row)
    }
    return map;
}

var firstTile = new Tile(1,1);
console.log(firstTile);

console.log(mapMaker());

// Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again