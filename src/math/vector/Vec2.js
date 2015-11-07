import Clamp from 'math/Clamp.js';

//  Everything is unrolled with no method chaining.

export default class Vec2 {

    constructor (x = 0, y = 0) {

        //  This may look ugly, but it allows for seamless exchange between
        //  Vec2, Float32Array and Array data types.

        this[0] = x;
        this[1] = y;

    }

    get x () {
        return this[0];
    }

    get y () {
        return this[1];
    }

    set x (v) {
        this[0] = v;
    }

    set y (v) {
        this[1] = v;
    }

    zero () {

        this[0] = 0;
        this[1] = 0;

        return this;

    }

    add (v) {

        this[0] += v[0];
        this[1] += v[1];

        return this;

    }

    sub (v) {

        this[0] -= v[0];
        this[1] -= v[1];

        return this;

    }

    scale (x, y = x) {

        this[0] *= x;
        this[1] *= y;

        return this;

    }

    scaleV (v) {

        this[0] *= v[0];
        this[1] *= v[1];

        return this;

    }

    div (n) {

        this[0] /= n;
        this[1] /= n;

        return this;

    }

    floor () {

        this[0] = Math.floor(this[0]);
        this[1] = Math.floor(this[1]);

        return this;

    }

    ceil () {

        this[0] = Math.ceil(this[0]);
        this[1] = Math.ceil(this[1]);

        return this;

    }

    negate () {

        this[0] = -this[0];
        this[1] = -this[1];

        return this;

    }

    normalize () {

        let l = this.length();

        if (l > 0)
        {
            this[0] /= l;
            this[1] /= l;
        }

        return this;

    }

    perp () {

        let x = this[0];
        let y = this[1];

        this[0] = y;
        this[1] = -x;

        return this;

    }

    rotate (angle) {

        let x = this[0];
        let y = this[1];

        this[0] = x * Math.cos(angle) - y * Math.sin(angle);
        this[1] = x * Math.sin(angle) + y * Math.cos(angle);

        return this;

    }

    rotateAround (center, angle) {

        const c = Math.cos(angle);
        const s = Math.sin(angle);

        const x = this[0] - center[0];
        const y = this[1] - center[1];

        this[0] = x * c - y * s + center[0];
        this[1] = x * s + y * c + center[1];

        return this;

    }

    dot (v) {

        return this[0] * v[0] + this[1] * v[1];

    }

    lengthSq () {

        return this[0] * this[0] + this[1] * this[1];

    }

    set length (v) {

        const angle = Math.atan2(this[1], this[0]);

        this[0] = Math.cos(angle) * v;
        this[1] = Math.sin(angle) * v;

    }

    get length () {

        return Math.sqrt(this[0] * this[0] + this[1] * this[1]);

    }

    lengthManhattan () {

        return Math.abs(this[0]) + Math.abs(this[1]);

    }

    distance (v) {

        let dx = this[0] - v[0];
        let dy = this[1] - v[1];

        return Math.sqrt(dx * dx + dy * dy);

    }

    distanceSq (v) {

        let dx = this[0] - v[0];
        let dy = this[1] - v[1];

        return dx * dx + dy * dy;

    }

    angle (v) {

        const dot = (this[0] * v[0]) + (this[1] * v[1]);
        const len = Math.sqrt((this[0] * this[0]) + (this[1] * this[1]));
        const lenV = Math.sqrt((v[0] * v[0]) + (v[1] * v[1]));

        return Math.acos(Clamp(dot / (len * lenV), -1, 1));

    }

    project (v) {

        const dot = (this[0] * v[0]) + (this[1] * v[1]);
        const lenV = (v[0] * v[0]) + (v[1] * v[1]);
        const s = dot / lenV;

        this[0] *= s;
        this[1] *= s;

        return this;

    }

    lerp (v, a) {

        this[0] += (v[0] - this[0]) * a;
        this[1] += (v[1] - this[1]) * a;

        return this;

    }

    toString () {

        return `[Vec2 (x=${this[0]}, y=${this[1]})]`;

    }

}