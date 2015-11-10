//  TODO - Add Vec4 functions

export default function (q1, q2, precision = 1e-6) {

    //  This compares for similar rotations not raw data
    let q1temp = q1;

    if (q1[3] * q2[3] < 0)
    {
        //  Quaternions in opposing hemispheres, negate one.
        // q1temp = VMath.v4Neg(q1);
    }

    // var mag_sqrd = VMath.v4LengthSq(VMath.v4Sub(q1temp, q2));
    // var epsilon_sqrd = (precision * precision);

    return mag_sqrd < epsilon_sqrd;

}
