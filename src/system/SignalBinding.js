export default class SignalBinding {

    constructor (signal, listener, isOnce = false, priority = 0, args = []) {

        this.signal = signal;

        this.listener = listener;

        this.isOnce = isOnce;

        this.priority = priority;

        this.args = args;

        this.callCount = 0;

        this.active = true;

    }

    execute (args) {

        let params = args.concat(this.args);
        let result = this.listener.apply(null, params);

        this.callCount++;

        if (this.isOnce)
        {
            this.signal.remove(this);
        }

        return result;

    }

    destroy () {

        this.signal = null;
        this.listener = null;
        this.args = null;
        this.active = false;

    }

}