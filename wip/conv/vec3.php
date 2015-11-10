<pre>
<?php
    $f = file_get_contents('../../src/math/vector/vec4/Vec4Math.js');

    $js = explode("\n", $f);

    $first = true;
    $section = '';
    $out = '';

    for ($i = 4; $i < count($js); $i++)
    {
        $line = $js[$i];

        if (substr($line, 0, 6) === 'export' || $i === count($js))
        {
            //  Already done a block?
            if (!$first)
            {
                //  Close it and Save it
                echo "$section\n";
                echo $out;
                echo "-----------------------------------\n";
                file_put_contents($section, $out);
                $out = '';
            }
            else
            {
                //  Open it and Start it
                $first = false;
            }

            $out = "let vec4 = Float32Array;\n\n";

            //  export function buildZero 
            $p = strpos($line, '(');

            //  New function line
            $out .= 'export default function ' . substr($line, $p) . "\n";

            $section = substr($line, 16, $p - 16);
            $section = ucfirst(trim($section)) . '.js';
        }
        else
        {
            $out .= $line . "\n";
        }
    }
?>
</pre>
