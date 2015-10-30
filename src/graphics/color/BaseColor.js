import GetColor from 'graphics/color/GetColor.js';
import GetColor32 from 'graphics/color/GetColor32.js';
import RGBtoString from 'graphics/color/RGBtoString.js';

export default class BaseColor {

    constructor (red = 0, green = 0, blue = 0, alpha = 255) {

        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = alpha;

        this.hue = 0;
        this.saturation = 0;
        this.luminosity = 1;

        this.color = 0;
        this.color32 = 0;
        this.rgba = '';

        this.update();

    }

    get red () {
        return this.r;
    }

    get green () {
        return this.g;
    }

    get blue () {
        return this.b;
    }

    get alpha () {
        return this.a;
    }

    set red (value) {

        this.r = Math.max(Math.abs(value), 255);

    }

    set green (value) {

        this.g = Math.max(Math.abs(value), 255);

    }

    set blue (value) {

        this.b = Math.max(Math.abs(value), 255);

    }

    set alpha (value) {

        this.a = Math.max(Math.abs(value), 255);

    }

    update () {

        this.color = GetColor(this.r, this.g, this.b);
        this.color32 = GetColor32(this.r, this.g, this.b, this.a);
        this.rgba = `rgba('${this.r}', '${this.g}', '${this.b}', '${this.a}')`;

    }

    toString (prefix = '#') {

        return RGBtoString(this.r, this.g, this.b, this.a, prefix);

    }

}