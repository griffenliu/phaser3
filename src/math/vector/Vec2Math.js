let vec2 = Float32Array;

const precision = 1e-6;
const FLOAT_MAX = 3.402823466e+38;

export function buildZero (dst = new vec2(2)) {

    dst[0] = 0;
    dst[1] = 0;

    return dst;

}

export function buildOne (dst = new vec2(2)) {

    dst[0] = 1;
    dst[1] = 1;

    return dst;

}

export function buildXAxis (dst = new vec2(2)) {

    dst[0] = 1;
    dst[1] = 0;

    return dst;

}

export function buildYAxis (dst = new vec2(2)) {

    dst[0] = 0;
    dst[1] = 1;

    return dst;

}

export function build (x, y, dst = new vec2(2)) {

    dst[0] = x;
    dst[1] = y;

    return dst;

}

export function copy (src, dst = new vec2(2)) {

    dst[0] = src[0];
    dst[1] = src[1];

    return dst;

}

export function set (v, a) {

    v[0] = a[0];
    v[1] = a[1];

    return v;

}

export function neg (a, dst = new vec2(2)) {

    dst[0] = -a[0];
    dst[1] = -a[1];

    return dst;

}

export function add (a, b, dst = new vec2(2)) {

    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];

    return dst;

}

export function add3 (a, b, c, dst = new vec2(2)) {

    dst[0] = a[0] + b[0] + c[0];
    dst[1] = a[1] + b[1] + c[1];

    return dst;

}

export function add4 (a, b, c, d, dst = new vec2(2)) {

    dst[0] = a[0] + b[0] + c[0] + d[0];
    dst[1] = a[1] + b[1] + c[1] + d[1];

    return dst;

}

export function sub (a, b, dst = new vec2(2)) {

    dst[0] = a[0] - b[0];
    dst[1] = a[1] - b[1];

    return dst;

}

export function mul (a, b, dst = new vec2(2)) {

    dst[0] = a[0] * b[0];
    dst[1] = a[1] * b[1];

    return dst;

}

export function mulAdd (a, b, c, dst = new vec2(2)) {

    dst[0] = (a[0] * b[0]) + c[0];
    dst[1] = (a[1] * b[1]) + c[1];

    return dst;

}

export function dot (a, b) {

    return (a[0] * b[0]) + (a[1] * b[1]);

}

export function perpDot (a, b) {

    return (a[0] * b[1]) - (a[1] * b[0]);

}

export function lengthSq (a) {

    let x = a[0];
    let y = a[1];

    return (x * x) + (y * y);

}

export function length (a) {

    let x = a[0];
    let y = a[1];

    return Math.sqrt((x * x) + (y * y));

}

export function reciprocal (a, dst = new vec2(2)) {

    // let rcp = VMath.reciprocal;

    // dst[0] = rcp(a[0]);
    // dst[1] = rcp(a[1]);

    return dst;

}

export function normalize (a, dst = new vec2(2)) {

    let x = a[0];
    let y = a[1];
    let lsq = (x * x) + (y * y);

    if (lsq > 0)
    {
        let lr = 1 / Math.sqrt(lsq);
        dst[0] = x * lr;
        dst[1] = y * lr;
    }
    else
    {
        dst[0] = 0;
        dst[1] = 0;
    }

    return dst;

}

export function abs (a, dst = new vec2(2)) {

    dst[0] = Math.abs(a[0]);
    dst[1] = Math.abs(a[1]);

    return dst;

}

export function floor (a, dst = new vec2(2)) {

    dst[0] = Math.floor(a[0]);
    dst[1] = Math.floor(a[1]);

    return dst;

}

export function ceil (a, dst = new vec2(2)) {

    dst[0] = Math.ceil(a[0]);
    dst[1] = Math.ceil(a[1]);

    return dst;

}

export function max (a, b, dst = new vec2(2)) {

    dst[0] = Math.max(a[0], b[0]);
    dst[1] = Math.max(a[1], b[1]);

    return dst;

}

export function min (a, b, dst = new vec2(2)) {

    dst[0] = Math.min(a[0], b[0]);
    dst[1] = Math.min(a[1], b[1]);

    return dst;

}

export function equal (a, b, dst = new vec2(2)) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision
    );

}



//  Vector Masks

export function maskEqual (a, b) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision
    );

}

export function maskLess (a, b) {

    return [ a[0] < b[0], a[1] < b[1] ];

}

export function maskGreater (a, b) {

    return [ a[0] > b[0], a[1] > b[1] ];

}

export function maskGreaterEq (a, b) {

    return [ a[0] >= b[0], a[1] >= b[1] ];

}

export function maskNot (a) {

    return [ !a[0], !a[1] ];

}

export function maskOr (a, b) {

    return [ a[0] || b[0], a[1] || b[1] ];

}

export function maskAnd (a, b) {

    return [ a[0] && b[0], a[1] && b[1] ];

}

export function select (m, a, b, dst = new vec2(2)) {

    dst[0] = m[0] ? a[0] : b[0];
    dst[1] = m[1] ? a[1] : b[1];

    return dst;

}

//  Scalar Operations

export function scalarBuild (a, dst = new vec2(2)) {

    dst[0] = a;
    dst[1] = a;

    return dst;

}

export function scalarMax (a, b, dst = new vec2(2)) {

    dst[0] = Math.max(a[0], b);
    dst[1] = Math.max(a[1], b);

    return dst;

}

export function scalarMin (a, b, dst = new vec2(2)) {

    dst[0] = Math.min(a[0], b);
    dst[1] = Math.min(a[1], b);

    return dst;

}

export function scalarAdd (a, b, dst = new vec2(2)) {

    dst[0] = a[0] + b;
    dst[1] = a[1] + b;

    return dst;

}

export function scalarSub (a, b, dst = new vec2(2)) {

    dst[0] = a[0] - b;
    dst[1] = a[1] - b;

    return dst;

}

export function scalarMul (a, b, dst = new vec2(2)) {

    if (b === 0)
    {
        dst[0] = 0;
        dst[1] = 0;
    }
    else
    {
        dst[0] = a[0] * b;
        dst[1] = a[1] * b;
    }

    return dst;

}

export function addScalarMul (a, b, c, dst = new vec2(2)) {

    dst[0] = a[0] + b[0] * c;
    dst[1] = a[1] + b[1] * c;

    return dst;

}

//  Vector 2 Masks with Scalars

export function equalScalarMask (a, b) {

    return [
        Math.abs(a[0] - b) <= this.precision,
        Math.abs(a[1] - b) <= this.precision
    ];

}

export function lessScalarMask (a, b) {

    return [ a[0] < b, a[1] < b ];

}

export function greaterScalarMask (a, b) {

    return [ a[0] > b, a[1] > b ];

}

export function greaterEqScalarMask (a, b) {

    return [ a[0] >= b, a[1] >= b ];

}

export function lerp (a, b, t, dst = new vec2(2)) {

    dst[0] = a[0] + ((b[0] - a[0]) * t);
    dst[1] = a[1] + ((b[1] - a[1]) * t);

    return dst;

}
