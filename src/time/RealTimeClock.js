//  This can implement RAF itself, so it can be the heart of the Game.
//  Then GameClock objects will use this data to run from, including their
//  own stepping rate, slow motion, etc. Each State can have its own GameClock instance,
//  updating at whatever rate it requires.

export default class RealTimeClock {

    constructor () {

        /**
        * The `performance.now()` value when the time was last updated.
        * @property {float} time
        * @protected
        */
        this.time = performance.now();

        /**
        * The `now` when the previous update occurred.
        * @property {float} prevTime
        * @protected
        */
        this.prevTime = 0;

        /**
        * Elapsed time since the last time update, in milliseconds, based on `now`.
        *
        * This value _may_ include time that the game is paused/inactive.
        *
        * _Note:_ This is updated only once per game loop - even if multiple logic update steps are done.
        * Use {@link Phaser.Timer#physicsTime physicsTime} as a basis of game/logic calculations instead.
        *
        * @property {number} elapsed
        * @see Phaser.Time.time
        * @protected
        */
        this.elapsed = 0;

        this._startTime = performance.now();

        // this.events = new Phaser.Timer(this.game, false);

    }

    //  If called by raf it will get performance.now as an argument anyway
    update () {

        this.prevTime = this.time;

        this.time = performance.now();

        this.elapsed = this.time - this.prevTime;

    }

    get totalElapsed () {

        return this.time - this._startTime;

    }

}