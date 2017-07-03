/**
 * Creates a pair of eyes
 * @param  {Phaser.Game} game  game object
 * @param  {Phaser.Sprite} head  Snake head sprite
 * @param  {Number} scale scale of eyes
 */
EyePair = function(game, head, scale) {
    this.game = game;
    this.head = head;
    this.scale = scale;
    this.eyes = [];

    this.debug = false;

    //create two eyes
    var offset = this.getOffset();
    this.leftEye = new Eye(this.game, this.head, this.scale);
    this.leftEye.updateConstraints([-offset.x, -offset.y]);
    this.eyes.push(this.leftEye);

    this.rightEye = new Eye(this.game, this.head, this.scale);
    this.rightEye.updateConstraints([offset.x, -offset.y]);
    this.eyes.push(this.rightEye);
}

EyePair.prototype = {
    /**
     * Get the offset that eyes should be from the head (based on scale)
     * @return {Object} offset distance with properties x and y
     */
    getOffset: function() {
        var xDim = this.head.width*0.25;
        var yDim = this.head.width*.125;
        return {x: xDim, y: yDim};
    },
    /**
     * Set the scale of the eyes
     * @param  {Number} scale new scale
     */
    setScale: function(scale) {
        this.leftEye.setScale(scale);
        this.rightEye.setScale(scale);
        //update constraints to place them at the right offset
        var offset = this.getOffset();
        this.leftEye.updateConstraints([-offset.x, -offset.y]);
        this.rightEye.updateConstraints([offset.x, -offset.y]);
    },
    /**
     * Call from snake update loop
     */
    update: function() {
        for (var i = 0 ; i < this.eyes.length ; i++) {
            this.eyes[i].update();
        }
    },
    /**
     * Destroy this eye pair
     */
    destroy: function() {
        this.leftEye.destroy();
        this.rightEye.destroy();
    }
};
