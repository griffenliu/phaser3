/**
* Generate a sine and cosine table simultaneously and extremely quickly.
* The parameters allow you to specify the length, amplitude and frequency of the wave.
* This generator is fast enough to be used in real-time.
* Code based on research by Franky of scene.at
*
* @method Phaser.Math#sinCosGenerator
* @param {number} length - The length of the wave
* @param {number} sinAmplitude - The amplitude to apply to the sine table (default 1.0) if you need values between say -+ 125 then give 125 as the value
* @param {number} cosAmplitude - The amplitude to apply to the cosine table (default 1.0) if you need values between say -+ 125 then give 125 as the value
* @param {number} frequency  - The frequency of the sine and cosine table data
* @return {{sin:number[], cos:number[]}} Returns the table data.
*/
export default function (length, sinAmp = 1.0, cosAmp = 1.0, frequency = 1.0) {

    frequency *= Math.PI / length;

    let cosTable = [];
    let sinTable = [];

    for (let c = 0; c < length; c++) {

        cosAmp -= sinAmp * frequency;
        sinAmp += cosAmp * frequency;

        cosTable[c] = cosAmp;
        sinTable[c] = sinAmp;

    }

    // return { sinTable, cosTable, length };

}
