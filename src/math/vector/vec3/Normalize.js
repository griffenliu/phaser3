let vec3 = Float32Array;

export default function (a, dst = new vec3(3)) {

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

