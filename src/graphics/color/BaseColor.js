import GetColor from 'graphics/color/GetColor.js';
import GetColor32 from 'graphics/color/GetColor32.js';
import RGBtoString from 'graphics/color/RGBtoString.js';
import HueToColor from 'graphics/color/HueToColor.js';

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

    fromRGB (r, g, b, a = 255) {

        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;

        return this.update();

    }

    fromColor (color) {

        if (color > 16777215)
        {
            this.a = color >>> 24;
        }
        else
        {
            this.a = 255;
        }

        this.r = color >> 16 & 0xFF;
        this.g = color >> 8 & 0xFF;
        this.b = color & 0xFF;

        return this.update();

    }

    fromRandom (min = 0, max = 255, alpha = 255) {

        this.red = min + Math.round(Math.random() * (max - min));
        this.green = min + Math.round(Math.random() * (max - min));
        this.blue = min + Math.round(Math.random() * (max - min));

        return this.update();

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
    fromHSV (h, s, v) {

        const i = Math.floor(h * 6);
        const f = h * 6 - i;

        const p = (v * (1 - s)) * 255;
        const q = (v * (1 - f * s)) * 255;
        const t = (v * (1 - (1 - f) * s)) * 255;

        const r = i % 6;

        v *= 255;

        if (r === 0)
        {
            return this.fromRGB(v, t, p);
        }
        else if (r === 1)
        {
            return this.fromRGB(q, v, p);
        }
        else if (r === 2)
        {
            return this.fromRGB(p, v, t);
        }
        else if (r === 3)
        {
            return this.fromRGB(p, q, v);
        }
        else if (r === 4)
        {
            return this.fromRGB(t, p, v);
        }
        else if (r === 5)
        {
            return this.fromRGB(v, p, q);
        }

    }

    fromHSVColorWheel (c = 0, s = 1, v = 1) {

        c = Math.min(Math.abs(c), 359);

        return this.fromHSV(c / 359, s, v);

    }

    fromHSL (h, s, l) {

        // achromatic by default
        const r = l;
        const g = l;
        const b = l;

        if (s !== 0)
        {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;

            r = HueToColor(p, q, h + 1 / 3);
            g = HueToColor(p, q, h);
            b = HueToColor(p, q, h - 1 / 3);
        }

        return this.fromRGB(r * 255, g * 255, b * 255);

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

    static createFromRandom (min, max, alpha) {

        return new BaseColor().fromRandom(min, max, alpha);

    }

}