let vec4 = Float32Array;

export default function (a, b) {

    return [ a[0] >= b, a[1] >= b, a[2] >= b, a[3] >= b ];

}

