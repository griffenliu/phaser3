
export function equal (a, b, epsilon = 0.0001) {

    return Math.abs(a - b) < epsilon;

}

export function lessThan (a, b, epsilon = 0.0001) {

    return a < b + epsilon;

}

export function greaterThan (a, b, epsilon = 0.0001) {

    return a > b - epsilon;

}

export function ceil (val, epsilon = 0.0001) {

    return Math.ceil(val - epsilon);

}

export function floor (val, epsilon = 0.0001) {

    return Math.floor(val + epsilon);

}
