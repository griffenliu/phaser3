export default class Clock {

    constructor (masterClock) {

        this.master = masterClock;

        this.time = 0;

        this.prevTime = 0;

        this.elapsed = 0;

        this._startTime = 0;

        this.updateCallback = null;

        this.events = new Set();

    }

}