// Enemies our player must avoid
var Enemy = function( ) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
 
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.speed = Math.round(Math.random() * 3 ) + 1;
 
  setTimeout(() =>{
    this.x = -50;
    this.y = [66,149,232][Math.round(Math.random() * 2)];
  }, this.speed * 100);
  this.sprite = 'images/enemy-bug.png';
 
 };
 
 // Update the enemy's position, required method for game
 // Parameter: dt, a time delta between ticks
 Enemy.prototype.update = function( dt ) {
  this.x = (this.x + dt * this.speed * 150) % (500)
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
             player.x = 202;
             player.y = 405;
             location.reload();
         };
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
 
 };
 
 
 // Draw the enemy on the screen, required method for game
 Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };
 
 Enemy.prototype.reset =  function(){
   //change speed
   this.speed =  Math.round(Math.random() * 3) + 1 ;
 };
 
 // Now write your own player class
 // This class requires an update(), render() and
 // a handleInput() method.
 
 function Player(){
   this.sprite = 'images/char-boy.png';
   this.x = 2 * 101;
   this.y = 5 * 80;
 };
 
 
 Player.prototype.update = function(x, y){



  // Prevent player from moving beyond canvas
 if (this.x >= 405) {
             this.x = 400;
         } else if (this.x <= -1) {
             this.x = 0;
         } else if (this.y >= 400) {
             this.y = 400;
         } else if (this.y <= -20) {
             this.x = 200;
             this.y = 400;
 
        }
 
 };
 
 Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };
 
 
 // Now instantiate your objects.
 // Place all enemy objects in an array called allEnemies
 // Place the player object in a variable called player
 
 
 Player.prototype.handleInput = function (moves){
         switch(moves) {
             case 'up': this.update(this.y -= 85);
             break;
             case 'down': this.update(this.y += 85);
             break;
             case 'right': this.update(this.x += 100);
             break;
             case 'left': this.update(this.x -= 100);
             break;
         }
 
     }
 
 
 Player.prototype.reset = function () {
   console.log('reset')
   this.x = 2 * 101;
   this.y = 5 * 80;
 };
 
 var allEnemies = [];
 //two enemies
 for ( var i =0; i<3; i++){
   allEnemies[i] = new Enemy();
   setInterval(() => {
     if (allEnemies[0].x > 450) {
            allEnemies[allEnemies.length] = new Enemy ();
            allEnemies.splice(0, 1);
     }
   }, 200)
 };
 
 var player = new Player ();
 
 
 
 /*
 * var enemyLocation = [ 63, 147, 230];
 * enemyLocation.forEach(function (locationY){
 * enemy = new Enemy(0, locationY, 200);
 * allEnemies.push(enemy);
 * });
 
 */
 
 
 
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