export default function (a, b) {

    const x = a[0];
    const y = a[1];
    const z = a[2];

    a[0] = y * v[2] - z * v[1];
    a[1] = z * v[0] - x * v[2];
    a[2] = x * v[1] - y * v[0];

    return a;

}
