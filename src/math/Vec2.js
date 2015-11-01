export default class Vec2 {

    constructor (x = 0, y = 0) {

        this.x = x;
        this.y = y;

    }

    setTo (x, y) {

        this.x = x;
        this.y = y;

    }

    equals (vec2) {

        return (this.x === vec2.x && this.y === vec2.y);

    }
    
}