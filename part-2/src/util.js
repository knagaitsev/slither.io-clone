const Util = {
    /**
     * Generate a random number within a closed range
     * @param  {Integer} min Minimum of range
     * @param  {Integer} max Maximum of range
     * @return {Integer}     random number generated
     */
    randomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    /**
     * Calculate distance between two points
     * @param  {Number} x1 first point
     * @param  {Number} y1 first point
     * @param  {Number} x2 second point
     * @param  {Number} y2 second point
     */
    distanceFormula: function(x1, y1, x2, y2) {
        var withinRoot = Math.pow(x1-x2,2) + Math.pow(y1-y2,2);
        var dist = Math.pow(withinRoot,0.5);
        return dist;
    }
};
