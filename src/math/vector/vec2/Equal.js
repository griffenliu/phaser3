let vec2 = Float32Array;

const precision = 1e-6;

export default function (a, b, dst = new vec2(2)) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision
    );

}
