
export default class BaseFile {

    constructor (loader, key, url, data) {

        this.loader = loader;

        if (key === undefined || key === '')
        {
            console.warn('Phaser.Loader: Invalid key given');
            return this;
        }

        this.key = key;

        this.path = loader.path;

        this.url = url;

        this.src = '';

        this.type = '';

        this.parent = null;

        this.linkFile = null;

        this.data = null;

        this.onStateChange = null;

        this.customLoad = false;

        //  _sigh_ no static class properties in ES6, just static methods
        this.PENDING = 0;
        this.LOADING = 1;
        this.LOADED = 2;
        this.FAILED = 3;
        this.DESTROYED = 4;

        this._state = 0;

    }

    link (parent, file) {

        if (this.linkFile)
        {
            return;
        }

        this.parent = parent;

        this.linkFile = file;

        file.link(parent, this);

    }

    add () {

        //  It's a Set so it won't allow multiple identical objects
        this.loader.list.add(this);

        return new Promise(
            (resolve, reject) => {
                this.onStateChange = function () {
                    if (this.state === this.LOADED)
                    {
                        resolve(this);
                    }
                    else if (this.state == this.FAILED)
                    {
                        reject(this);
                    }
                }
            }
        );

    }

    load () {

        this.src = this.loader.getURL(this);

        if (!this.customLoad)
        {
            this.loader.xhrLoad(this);
        }

        this.state = this.LOADING;

    }

    complete (data = null) {

        if (data)
        {
            this.data = data;
        }

        this.state = this.LOADED;

        this.loader.nextFile();

    }

    error () {

        this.state = this.FAILED;

        this.loader.nextFile();

    }

    get state () {

        return this._state;

    }

    set state (value) {

        if (this._state !== value)
        {
            this._state = value;
            this.onStateChange(this);
        }

    }

    get loading () {

        return (this._state === this.LOADING);

    }

    //  Add to cache, etc
    process () {

        console.log('BaseFile.process', this.src);

    }

    destroy () {

        this.loader = null;
        this.parent = null;
        this.linkFile = null;
        this.data = null;

        this.state = this.DESTROYED;

    }
    
}
