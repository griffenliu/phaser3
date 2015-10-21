
export default class BaseFile {

    constructor (loader, key, url, data) {

        this.loader = loader;

        if (key === undefined || key === '')
        {
            console.warn("Phaser.Loader: Invalid or no key given of type " + type);
            return this;
        }

        this.key = key;

        this.path = loader.path;

        this.url = url;

        this.src = '';

        this.type = '';

        this.parent = null;

        this.linkFile = null;

        // this.syncPoint = loader._withSyncPointDepth > 0;
        this.data = null;

        this.customLoad = false;

        this.loading = false;
        this.loaded = false;
        this.failed = false;

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

        //  Add itself to the Loaders list

        //  It's a Set so it won't allow multiple identical objects
        this.loader.list.add(this);

    }

    load () {

        this.loading = true;

        this.src = this.loader.getURL(this);

        console.log('BaseFile.load', this.src);

        if (!this.customLoad)
        {
            this.loader.xhrLoad(this);
        }

    }

    //  load completed with no errors
    complete (data = null) {

        this.loading = false;
        this.loaded = true;

        if (data)
        {
            this.data = data;
        }

        console.log('BaseFile.complete', this.url);

        this.loader.nextFile();

    }

    //  load completed with errors
    error () {

        this.loading = false;
        this.failed = true;

        console.log('BaseFile.error', this.key);

        this.loader.nextFile();

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

    }
    
}
