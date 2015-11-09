let mat = Float32Array;

export default function (m, dst = new mat(12)) {

    var normalize = VMath.v3Normalize;
    var length    = VMath.v3Length;
    var dot       = VMath.v3Dot;
    var cross     = VMath.v3Cross;
    var abs       = Math.abs;

    var right = VMath.m43Right(m);
    var up    = VMath.m43Up(m);
    var at    = VMath.m43At(m);
    var pos   = VMath.m43Pos(m);

    var innerX = length(right);
    var innerY = length(up);
    var innerZ = length(at);

    normalize(right, right);
    normalize(up, up);
    normalize(at, at);

    var vpU, vpV, vpW;
    if (innerX > 0.0)
    {
        if (innerY > 0.0)
        {
            if (innerZ > 0.0)
            {
                var outerX = abs(dot(up, at));
                var outerY = abs(dot(at, right));
                var outerZ = abs(dot(right, up));
                if (outerX < outerY)
                {
                    if (outerX < outerZ)
                    {
                        vpU = up;
                        vpV = at;
                        vpW = right;
                    }
                    else
                    {
                        vpU = right;
                        vpV = up;
                        vpW = at;
                    }
                }
                else
                {
                    if (outerY < outerZ)
                    {
                        vpU = at;
                        vpV = right;
                        vpW = up;
                    }
                    else
                    {
                        vpU = right;
                        vpV = up;
                        vpW = at;
                    }
                }
            }
            else
            {
                vpU = right;
                vpV = up;
                vpW = at;
            }
        }
        else
        {
            vpU = at;
            vpV = right;
            vpW = up;
        }
    }
    else
    {
        vpU = up;
        vpV = at;
        vpW = right;
    }

    cross(vpU, vpV, vpW);
    normalize(vpW, vpW);

    cross(vpW, vpU, vpV);
    normalize(vpV, vpV);

    dst[0] = right[0];
    dst[1] = right[1];
    dst[2] = right[2];
    dst[3] = up[0];
    dst[4] = up[1];
    dst[5] = up[2];
    dst[6] = at[0];
    dst[7] = at[1];
    dst[8] = at[2];
    dst[9] = pos[0];
    dst[10] = pos[1];
    dst[11] = pos[2];

    return dst;

}
