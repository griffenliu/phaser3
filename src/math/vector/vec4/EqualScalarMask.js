let vec4 = Float32Array;

export default function (a, b) {

    return [
        Math.abs(a[0] - b) <= this.precision,
        Math.abs(a[1] - b) <= this.precision,
        Math.abs(a[2] - b) <= this.precision,
        Math.abs(a[3] - b) <= this.precision
    ];

}

