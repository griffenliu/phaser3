import GetColor from 'graphics/color/GetColor.js';
import GetColor32 from 'graphics/color/GetColor32.js';
import RGBtoString from 'graphics/color/RGBtoString.js';
import HSVtoRGB from 'graphics/color/HSVtoRGB.js';
import HSLtoRGB from 'graphics/color/HSLtoRGB.js';
import RandomRGB from 'graphics/color/RandomRGB.js';
import ColorToRGB from 'graphics/color/ColorToRGB.js';
import * as LinearInterpolation from 'graphics/color/LinearInterpolation.js';

export default class BaseColor {

    constructor (red = 0, green = 0, blue = 0, alpha = 255) {

        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = alpha;

        // this.hue = 0;
        // this.saturation = 0;
        // this.luminosity = 1;

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

        value = Math.floor(Math.abs(value));

        this.r = Math.min(value, 255);

    }

    set green (value) {

        value = Math.floor(Math.abs(value));

        this.g = Math.min(value, 255);

    }

    set blue (value) {

        value = Math.floor(Math.abs(value));

        this.b = Math.min(value, 255);

    }

    set alpha (value) {

        value = Math.floor(Math.abs(value));

        this.a = Math.min(value, 255);

    }

    //  Assumes all values are valid and within range (0 - 255)
    setRGB (r, g, b, a = 255) {

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

        return this.update();

    }

    //  Same as setRGB but performs safety checks on all the values given
    fromRGB (r, g, b, a = 255) {

        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;

        return this.update();

    }

    fromColor (color) {

        let { r, g, b, a } = ColorToRGB(color);

        return this.setRGB(r, g, b, a);

    }

    fromRandom (min = 0, max = 255) {

        let { r, g, b } = RandomRGB(min, max);

        return this.setRGB(r, g, b);

    }

    /**
     * Converts an HSV (hue, saturation and value) color value to RGB.
     * Conversion forumla from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes HSV values are contained in the set [0, 1] and returns r, g and b values in the set [0, 255].
     * Based on code by Michael Jackson (https://github.com/mjijackson)
     *
     * @method fromHSV
     * @param {number} h - The hue, in the range 0 - 1.
     * @param {number} s - The saturation, in the range 0 - 1.
     * @param {number} v - The value, in the range 0 - 1.
     * @return {BaseColor} This
     */
    fromHSV (h, s = 1, v = 1) {

        let { r, g, b } = HSVtoRGB(h, s, v);

        return this.fromRGB(r, g, b);

    }

    fromHSVColorWheel (c = 0, s = 1, v = 1) {

        c = Math.min(Math.abs(c), 359) / 359;

        let { r, g, b } = HSVtoRGB(c, s, v);

        return this.fromRGB(r, g, b);

    }

    fromHSL (h, s, l) {

        let { r, g, b } = HSLtoRGB(h, s, l);

        return this.fromRGB(r, g, b);

    }

    fromHSLColorWheel (c = 0, s = 1, l = 0.5) {

        c = Math.min(Math.abs(c), 359) / 359;

        let { r, g, b } = HSLtoRGB(c, s, l);

        return this.fromRGB(r, g, b);

    }

    fromInterpolation (color1, color2, length, index) {

        let { r, g, b } = LinearInterpolation.colorWithColor(color1, color2, length, index);

        return this.fromRGB(r, g, b);

    }

    interpolateWith (color, length, index) {

        let { r, g, b } = LinearInterpolation.colorWithColor(this, color, length, index);

        return this.fromRGB(r, g, b);

    }

    clone () {

        return new BaseColor(this.r, this.g, this.b, this.a);

    }

    update () {

        this.color = GetColor(this.r, this.g, this.b);
        this.color32 = GetColor32(this.r, this.g, this.b, this.a);
        this.rgba = `rgba(${this.r}, ${this.g}, ${this.b}, ${255 / this.a})`;

        return this;

    }

    toString (prefix = '#') {

        return RGBtoString(this.r, this.g, this.b, this.a, prefix);

    }

    static create (color) {

        return new BaseColor().fromColor(color);

    }

    static createRandom (min, max) {

        return new BaseColor().fromRandom(min, max);

    }

}