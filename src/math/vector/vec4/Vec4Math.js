let vec4 = Float32Array;

const precision = 1e-6;
const FLOAT_MAX = 3.402823466e+38;

export function buildZero (dst = new vec4(4)) {

    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;

    return dst;

}

export function buildOne (dst = new vec4(4)) {

    dst[0] = 1;
    dst[1] = 1;
    dst[2] = 1;
    dst[3] = 1;

    return dst;

}

export function build (a, b, c, d, dst = new vec4(4)) {

    dst[0] = a;
    dst[1] = b;
    dst[2] = c;
    dst[3] = d;

    return dst;

}

export function copy (src, dst = new vec4(4)) {

    dst[0] = src[0];
    dst[1] = src[1];
    dst[2] = src[2];
    dst[3] = src[3];

    return dst;

}

export function set (v, a) {

    v[0] = a[0];
    v[1] = a[1];
    v[2] = a[2];
    v[3] = a[3];

}

export function neg (a, dst = new vec4(4)) {

    dst[0] = -a[0];
    dst[1] = -a[1];
    dst[2] = -a[2];
    dst[3] = -a[3];

    return dst;

}

export function add (a, b, dst = new vec4(4)) {

    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];
    dst[2] = a[2] + b[2];
    dst[3] = a[3] + b[3];

    return dst;

}

export function add3 (a, b, c, dst = new vec4(4)) {

    dst[0] = a[0] + b[0] + c[0];
    dst[1] = a[1] + b[1] + c[1];
    dst[2] = a[2] + b[2] + c[2];
    dst[3] = a[3] + b[3] + c[3];

    return dst;

}

export function add4 (a, b, c, d, dst = new vec4(4)) {

    dst[0] = a[0] + b[0] + c[0] + d[0];
    dst[1] = a[1] + b[1] + c[1] + d[1];
    dst[2] = a[2] + b[2] + c[2] + d[2];
    dst[3] = a[3] + b[3] + c[3] + d[3];

    return dst;

}

export function sub (a, b, dst = new vec4(4)) {

    dst[0] = a[0] - b[0];
    dst[1] = a[1] - b[1];
    dst[2] = a[2] - b[2];
    dst[3] = a[3] - b[3];

    return dst;

}

export function mul (a, b, dst = new vec4(4)) {

    dst[0] = a[0] * b[0];
    dst[1] = a[1] * b[1];
    dst[2] = a[2] * b[2];
    dst[3] = a[3] * b[3];

    return dst;

}

export function mulAdd (a, b, c, dst = new vec4(4)) {

    dst[0] = (a[0] * b[0]) + c[0];
    dst[1] = (a[1] * b[1]) + c[1];
    dst[2] = (a[2] * b[2]) + c[2];
    dst[3] = (a[3] * b[3]) + c[3];

    return dst;

}

export function dot (a, b) {

    return (a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]);

}

export function lengthSq (a) {

    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];

    return ((a0 * a0) + (a1 * a1) + (a2 * a2) + (a3 * a3));

}

export function length (a) {

    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];

    return Math.sqrt((a0 * a0) + (a1 * a1) + (a2 * a2) + (a3 * a3));

}

export function reciprocal (a, dst = new vec4(4)) {

    // var rcp = VMath.reciprocal;

    // dst[0] = rcp(a[0]);
    // dst[1] = rcp(a[1]);
    // dst[2] = rcp(a[2]);
    // dst[3] = rcp(a[3]);

    return dst;

}

export function mulAdd (a, dst = new vec4(4)) {

    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];

    const lsq = ((a0 * a0) + (a1 * a1) + (a2 * a2) + (a3 * a3));

    if (lsq > 0.0)
    {
        const lr = 1.0 / Math.sqrt(lsq);
        dst[0] = a0 * lr;
        dst[1] = a1 * lr;
        dst[2] = a2 * lr;
        dst[3] = a3 * lr;
    }
    else
    {
        dst[0] = 0;
        dst[1] = 0;
        dst[2] = 0;
        dst[3] = 0;
    }

    return dst;

}

export function abs (a, dst = new vec4(4)) {

    dst[0] = Math.abs(a[0]);
    dst[1] = Math.abs(a[1]);
    dst[2] = Math.abs(a[2]);
    dst[3] = Math.abs(a[3]);

    return dst;
}

export function max (a, b, dst = new vec4(4)) {

    dst[0] = Math.max(a[0], b[0]);
    dst[1] = Math.max(a[1], b[1]);
    dst[2] = Math.max(a[2], b[2]);
    dst[3] = Math.max(a[3], b[3]);

    return dst;

}

export function min (a, b, dst = new vec4(4)) {

    dst[0] = Math.min(a[0], b[0]);
    dst[1] = Math.min(a[1], b[1]);
    dst[2] = Math.min(a[2], b[2]);
    dst[3] = Math.min(a[3], b[3]);

    return dst;

}

export function equal (a, b, precision = this.precision) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision &&
        Math.abs(a[2] - b[2]) <= this.precision &&
        Math.abs(a[3] - b[3]) <= this.precision
    );
}

// Vector 'masks'

export function maskEqual (a, b) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision &&
        Math.abs(a[2] - b[2]) <= this.precision &&
        Math.abs(a[3] - b[3]) <= this.precision
    );

}

export function maskLess (a, b) {

    return [ 
        a[0] < b[0], 
        a[1] < b[1], 
        a[2] < b[2], 
        a[3] < b[3]
    ];

}

export function maskGreater (a, b) {

    return [ 
        a[0] > b[0], 
        a[1] > b[1], 
        a[2] > b[2], 
        a[3] > b[3]
    ];

}

export function maskGreaterEq (a, b) {

    return [ 
        a[0] >= b[0], 
        a[1] >= b[1], 
        a[2] >= b[2], 
        a[3] >= b[3]
    ];

}

export function maskNot (a) {

    return [ !a[0], !a[1], !a[2], !a[3] ];

}

export function maskOr (a, b) {

    return [ 
        a[0] || b[0], 
        a[1] || b[1], 
        a[2] || b[2],
        a[3] || b[3]
    ];

}

export function maskAnd (a, b) {

    return [ 
        a[0] && b[0], 
        a[1] && b[1], 
        a[2] && b[2],
        a[3] && b[3] 
    ];

}

export function many (m) {

    return (m[0] || m[1] || m[2] || m[3]);

}

export function maskAll (m) {

    return (m[0] && m[1] && m[2] && m[3]);

}

export function select (m, a, b, dst = new vec4(4)) {

    dst[0] = m[0] ? a[0] : b[0];
    dst[1] = m[1] ? a[1] : b[1];
    dst[2] = m[2] ? a[2] : b[2];
    dst[3] = m[3] ? a[3] : b[3];

    return dst;

}

//  Scalar Operations

export function scalarBuild (a, dst = new vec4(4)) {

    dst[0] = a;
    dst[1] = a;
    dst[2] = a;
    dst[3] = a;

    return dst;

}

export function scalarMax (a, b, dst = new vec4(4)) {

    dst[0] = Math.max(a[0], b);
    dst[1] = Math.max(a[1], b);
    dst[2] = Math.max(a[2], b);
    dst[3] = Math.max(a[3], b);

    return dst;

}

export function scalarMin (a, b, dst = new vec4(4)) {

    dst[0] = Math.min(a[0], b);
    dst[1] = Math.min(a[1], b);
    dst[2] = Math.min(a[2], b);
    dst[3] = Math.min(a[3], b);

    return dst;

}

export function scalarAdd (a, b, dst = new vec4(4)) {

    dst[0] = a[0] + b;
    dst[1] = a[1] + b;
    dst[2] = a[2] + b;
    dst[3] = a[3] + b;

    return dst;

}

export function scalarSub (a, b, dst = new vec4(4)) {

    dst[0] = a[0] - b;
    dst[1] = a[1] - b;
    dst[2] = a[2] - b;
    dst[3] = a[3] - b;

    return dst;

}

export function scalarMul (a, b, dst = new vec4(4)) {

    if (b === 0)
    {
        dst[0] = 0;
        dst[1] = 0;
        dst[2] = 0;
        dst[3] = 0;
    }
    else
    {
        dst[0] = a[0] * b;
        dst[1] = a[1] * b;
        dst[2] = a[2] * b;
        dst[3] = a[3] * b;
    }

    return dst;

}

export function addScalarMul (a, b, c, dst = new vec4(4)) {

    dst[0] = a[0] + b[0] * c;
    dst[1] = a[1] + b[1] * c;
    dst[2] = a[2] + b[2] * c;
    dst[3] = a[3] + b[3] * c;

    return dst;

}

export function scalarEqual (a, b) {

    return (
        Math.abs(a[0] - b) <= this.precision &&
        Math.abs(a[1] - b) <= this.precision &&
        Math.abs(a[2] - b) <= this.precision &&
        Math.abs(a[3] - b) <= this.precision
    );

}

//  Vector 4 Masks with Scalars

export function equalScalarMask (a, b) {

    return [
        Math.abs(a[0] - b) <= this.precision,
        Math.abs(a[1] - b) <= this.precision,
        Math.abs(a[2] - b) <= this.precision,
        Math.abs(a[3] - b) <= this.precision
    ];

}

export function lessScalarMask (a, b) {

    return [ a[0] < b, a[1] < b, a[2] < b, a[3] < b ];

}

export function greaterScalarMask (a, b) {

    return [ a[0] > b, a[1] > b, a[2] > b, a[3] > b ];

}

export function greaterEqScalarMask (a, b) {

    return [ a[0] >= b, a[1] >= b, a[2] >= b, a[3] >= b ];

}

export function lerp (a, b, t, dst = new vec3(3)) {

    dst[0] = a[0] + ((b[0] - a[0]) * t);
    dst[1] = a[1] + ((b[1] - a[1]) * t);
    dst[2] = a[2] + ((b[2] - a[2]) * t);
    dst[3] = a[3] + ((b[3] - a[3]) * t);

    return dst;

}
