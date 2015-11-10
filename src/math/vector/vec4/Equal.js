let vec4 = Float32Array;

export default function (a, b, precision = this.precision) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision &&
        Math.abs(a[2] - b[2]) <= this.precision &&
        Math.abs(a[3] - b[3]) <= this.precision
    );
}

// Vector 'masks'

