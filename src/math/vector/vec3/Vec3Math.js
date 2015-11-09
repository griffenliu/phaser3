let vec3 = Float32Array;

const precision = 1e-6;
const FLOAT_MAX = 3.402823466e+38;

export function buildZero (dst = new vec3(3)) {

    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;

    return dst;

}

export function buildOne (dst = new vec3(3)) {

    dst[0] = 1;
    dst[1] = 1;
    dst[2] = 2;

    return dst;

}

export function buildXAxis (dst = new vec3(3)) {

    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;

    return dst;

}

export function buildYAxis (dst = new vec3(3)) {

    dst[0] = 0;
    dst[1] = 1;
    dst[2] = 0;

    return dst;

}

export function buildZAxis (dst = new vec3(3)) {

    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 1;

    return dst;

}

export function build (x, y, z, dst = new vec3(3)) {

    dst[0] = x;
    dst[1] = y;
    dst[2] = z;

    return dst;

}

export function copy (src, dst = new vec3(3)) {

    dst[0] = src[0];
    dst[1] = src[1];
    dst[2] = src[2];

    return dst;

}

export function set (v, a) {

    v[0] = a[0];
    v[1] = a[1];
    v[2] = a[2];

    return v;

}

export function neg (a, dst = new vec3(3)) {

    dst[0] = -a[0];
    dst[1] = -a[1];
    dst[2] = -a[2];

    return dst;

}

export function add (a, b, dst = new vec3(3)) {

    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];
    dst[2] = a[2] + b[2];

    return dst;

}

export function add3 (a, b, c, dst = new vec3(3)) {

    dst[0] = a[0] + b[0] + c[0];
    dst[1] = a[1] + b[1] + c[1];
    dst[2] = a[2] + b[2] + c[2];

    return dst;

}

export function add4 (a, b, c, d, dst = new vec3(3)) {

    dst[0] = a[0] + b[0] + c[0] + d[0];
    dst[1] = a[1] + b[1] + c[1] + d[1];
    dst[2] = a[2] + b[2] + c[2] + d[2];

    return dst;

}

export function sub (a, b, dst = new vec3(3)) {

    dst[0] = a[0] - b[0];
    dst[1] = a[1] - b[1];
    dst[2] = a[2] - b[2];

    return dst;

}

export function mul (a, b, dst = new vec3(3)) {

    dst[0] = a[0] * b[0];
    dst[1] = a[1] * b[1];
    dst[2] = a[2] * b[2];

    return dst;

}

export function mulAdd (a, b, c, dst = new vec3(3)) {

    dst[0] = (a[0] * b[0]) + c[0];
    dst[1] = (a[1] * b[1]) + c[1];
    dst[2] = (a[2] * b[2]) + c[2];

    return dst;

}

export function dot (a, b) {

    return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] + b[2]);

}

export function cross (a, b, dst = new vec3(3)) {

    let a0 = a[0];
    let a1 = a[1];
    let a2 = a[2];

    let b0 = b[0];
    let b1 = b[1];
    let b2 = b[2];

    dst[0] = (a1 * b2) - (a2 * b1);
    dst[1] = (a2 * b0) - (a0 * b2);
    dst[2] = (a0 * b1) - (a1 * b0);

    return dst;

}

export function lengthSq (a) {

    let x = a[0];
    let y = a[1];
    let z = a[2];

    return (x * x) + (y * y) + (z * z);

}

export function length (a) {

    let x = a[0];
    let y = a[1];
    let z = a[2];

    return Math.sqrt((x * x) + (y * y) + (z * z));

}

export function reciprocal (a, dst = new vec3(3)) {

    // let rcp = VMath.reciprocal;

    // var rcp = VMath.reciprocal;
    // dst[0] = rcp(a[0]);
    // dst[1] = rcp(a[1]);
    // dst[2] = rcp(a[2]);

    return dst;

}

export function normalize (a, dst = new vec3(3)) {

    let x = a[0];
    let y = a[1];
    let z = a[2];

    let lsq = (x * x) + (y * y) + (z * z);

    if (lsq > 0)
    {
        let lr = 1 / Math.sqrt(lsq);
        dst[0] = x * lr;
        dst[1] = y * lr;
        dst[2] = z * lr;
    }
    else
    {
        dst[0] = 0;
        dst[1] = 0;
        dst[2] = 0;
    }

    return dst;

}

export function abs (a, dst = new vec3(3)) {

    dst[0] = Math.abs(a[0]);
    dst[1] = Math.abs(a[1]);
    dst[2] = Math.abs(a[2]);

    return dst;

}

export function max (a, b, dst = new vec3(3)) {

    dst[0] = Math.max(a[0], b[0]);
    dst[1] = Math.max(a[1], b[1]);
    dst[2] = Math.max(a[2], b[2]);

    return dst;

}

export function min (a, b, dst = new vec3(3)) {

    dst[0] = Math.min(a[0], b[0]);
    dst[1] = Math.min(a[1], b[1]);
    dst[2] = Math.min(a[2], b[2]);

    return dst;

}

export function equal (a, b, dst = new vec3(3)) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision &&
        Math.abs(a[2] - b[2]) <= this.precision
    );

}

//  Vector Masks

export function maskEqual (a, b) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision &&
        Math.abs(a[2] - b[2]) <= this.precision
    );

}

export function maskLess (a, b) {

    return [ a[0] < b[0], a[1] < b[1], a[2] < b[2] ];

}

export function maskGreater (a, b) {

    return [ a[0] > b[0], a[1] > b[1], a[2] > b[2] ];

}

export function maskGreaterEq (a, b) {

    return [ a[0] >= b[0], a[1] >= b[1], a[2] >= b[2] ];

}

export function maskNot (a) {

    return [ !a[0], !a[1], !a[2] ];

}

export function maskOr (a, b) {

    return [ a[0] || b[0], a[1] || b[1], a[2] || b[2] ];

}

export function maskAnd (a, b) {

    return [ a[0] && b[0], a[1] && b[1], a[2] && b[2] ];

}

export function select (m, a, b, dst = new vec3(3)) {

    dst[0] = m[0] ? a[0] : b[0];
    dst[1] = m[1] ? a[1] : b[1];
    dst[2] = m[2] ? a[2] : b[2];

    return dst;

}

//  Scalar Operations

export function scalarBuild (a, dst = new vec3(3)) {

    dst[0] = a;
    dst[1] = a;
    dst[2] = a;

    return dst;

}

export function scalarMax (a, b, dst = new vec3(3)) {

    dst[0] = Math.max(a[0], b);
    dst[1] = Math.max(a[1], b);
    dst[2] = Math.max(a[2], b);

    return dst;

}

export function scalarMin (a, b, dst = new vec3(3)) {

    dst[0] = Math.min(a[0], b);
    dst[1] = Math.min(a[1], b);
    dst[2] = Math.min(a[2], b);

    return dst;

}

export function scalarAdd (a, b, dst = new vec3(3)) {

    dst[0] = a[0] + b;
    dst[1] = a[1] + b;
    dst[2] = a[2] + b;

    return dst;

}

export function scalarSub (a, b, dst = new vec3(3)) {

    dst[0] = a[0] - b;
    dst[1] = a[1] - b;
    dst[2] = a[2] - b;

    return dst;

}

export function scalarMul (a, b, dst = new vec3(3)) {

    if (b === 0)
    {
        dst[0] = 0;
        dst[1] = 0;
        dst[2] = 0;
    }
    else
    {
        dst[0] = a[0] * b;
        dst[1] = a[1] * b;
        dst[2] = a[2] * b;
    }

    return dst;

}

export function addScalarMul (a, b, c, dst = new vec3(3)) {

    dst[0] = a[0] + b[0] * c;
    dst[1] = a[1] + b[1] * c;
    dst[2] = a[2] + b[2] * c;

    return dst;

}

//  Vector 3 Masks with Scalars

export function equalScalarMask (a, b) {

    return [
        Math.abs(a[0] - b) <= this.precision,
        Math.abs(a[1] - b) <= this.precision,
        Math.abs(a[2] - b) <= this.precision
    ];

}

export function lessScalarMask (a, b) {

    return [ a[0] < b, a[1] < b, a[2] < b ];

}

export function greaterScalarMask (a, b) {

    return [ a[0] > b, a[1] > b, a[2] > b ];

}

export function greaterEqScalarMask (a, b) {

    return [ a[0] >= b, a[1] >= b, a[2] >= b ];

}

export function lerp (a, b, t, dst = new vec3(3)) {

    dst[0] = a[0] + ((b[0] - a[0]) * t);
    dst[1] = a[1] + ((b[1] - a[1]) * t);
    dst[2] = a[2] + ((b[2] - a[2]) * t);

    return dst;

}
