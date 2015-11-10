let vec3 = Float32Array;

export default function (a, b, dst = new vec3(3)) {

    return (
        Math.abs(a[0] - b[0]) <= this.precision &&
        Math.abs(a[1] - b[1]) <= this.precision &&
        Math.abs(a[2] - b[2]) <= this.precision
    );

}

//  Vector Masks

