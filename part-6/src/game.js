Game = function(game) {}

Game.prototype = {
    preload: function() {
        //load assets
        this.game.load.image('circle','asset/circle.png');
        this.game.load.image('shadow', 'asset/white-shadow.png');
    	this.game.load.image('background', 'asset/tile.png');

        this.game.load.image('eye-white', 'asset/eye-white.png');
    	this.game.load.image('eye-black', 'asset/eye-black.png');
    },
    create: function() {
        var width = this.game.width;
        var height = this.game.height;

        this.game.world.setBounds(-width, -height, width*2, height*2);
    	this.game.stage.backgroundColor = '#444';

        //add tilesprite background
        var background = this.game.add.tileSprite(-width, -height,
            this.game.world.width, this.game.world.height, 'background');

        //initialize physics and groups
        this.game.physics.startSystem(Phaser.Physics.P2JS);

        this.game.snakes = [];

        //create player
        var snake = new PlayerSnake(this.game, 'circle', 0, 0);
        this.game.camera.follow(snake.head);

        //create bots
        new BotSnake(this.game, 'circle', -200, 0);
        new BotSnake(this.game, 'circle', 200, 0);
    },
    /**
     * Main update loop
     */
    update: function() {
        //update game components
        for (var i = this.game.snakes.length - 1 ; i >= 0 ; i--) {
            this.game.snakes[i].update();
        }
    }
};
