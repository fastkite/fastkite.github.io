// Enemies our player must avoid
var Enemy = function(row, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -101;
    if (row == 0) {
        this.y = 50;
    } else if (row == 1) {
        this.y = 135;
    } else {
        this.y = 220;
    }
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > ctx.canvas.width + 101/2)
        this.wrap();
};

Enemy.prototype.wrap = function () {
    this.x = -101;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.startoverX = 101*2;
    this.startoverY = 83*5-83/2;
    this.x = this.startoverX;
    this.y = this.startoverY;

    this.sprite = 'images/char-boy.png';

};

Player.prototype.handleInput = function (key) {
    //console.log(player.x+","+player.y);
    if (key == 'left' && player.x - 101 >= 0)
        this.x -= 101;
    else if (key == 'right' &&  player.x+101+101 <= ctx.canvas.width) //505
        this.x += 101;
    else if (key == 'up') // we can always move up because the water will reset us
        this.y -= 83;
    else if (key == 'down' &&  player.y + 83 + 83 <= ctx.canvas.height-108) //606-108=498 (108 is the bottom edge)
        this.y += 83;
    //console.log(player.x+","+player.y);
};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function () {

    if (this.y < 0)
    {
        this.startover();
    }

};


Player.prototype.startover = function () {
    
    this.x = this.startoverX;
    this.y = this.startoverY;

}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];


var enemy0 = new Enemy(0, 300); // row 0
var enemy1 = new Enemy(1, 100); // row 1
var enemy2 = new Enemy(2, 200); // row 2
var enemy3 = new Enemy(1, 200); // row 1

allEnemies.push(enemy0);
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


