export default class WebGLProgram {

    constructor (gl) {

        this.gl = gl;

        this.program = gl.createProgram();

        if (!this.program)
        {
            console.warn('WebGLProgram - unable to createProgram on gl context');
            return null;
        }

    }

    getAttrib (name) {

        let loc = this.gl.getAttribLocation(this.program, name);

        if (loc < 0)
        {
            console.warn('WebGLProgram - failed to get attribute location: ' + name);
        }
        else
        {
            return loc;
        }

    }

    attach (...shaders) {

        for (let shader of shaders)
        {
            this.gl.attachShader(this.program, shader);
        }

        return this;

    }

    attachAndDelete (...shaders) {

        for (let shader of shaders)
        {
            this.gl.attachShader(this.program, shader);
            this.gl.deleteShader(shader);
        }

        return this;

    }

    link () {

        this.gl.linkProgram(this.program);

        let result = this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS);

        if (!result)
        {
            let error = this.gl.getProgramInfoLog(this.program);

            console.warn('Failed to link WebGL program: ' + error);

            this.delete();
        }

        return this;

    }

    use () {

        this.gl.useProgram(this.program);

        return this;

    }

    detatch (...shaders) {

        for (let shader of shaders)
        {
            this.gl.detatchShader(shader);
        }

        return this;

    }

    delete () {

        this.gl.deleteProgram(this.program);

        return this;

    }

    destroy () {

        this.delete();

        this.gl = null;
        this.program = null;

    }

}
